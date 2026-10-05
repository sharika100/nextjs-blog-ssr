/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');

async function testEndpoint(path, expectedStatus = 200) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(`[TEST] ${path} -> Status: ${res.statusCode} (Expected: ${expectedStatus})`);
        if (res.statusCode === expectedStatus) {
          resolve(data);
        } else {
          reject(new Error(`Failed ${path}: got ${res.statusCode}`));
        }
      });
    }).on('error', reject);
  });
}

async function runTests() {
  console.log('--- STARTING FUNCTIONAL TESTS ---');
  
  // 1. Homepage SSR
  const homeHtml = await testEndpoint('/');
  if (!homeHtml.includes('Beyond UI Blog') || !homeHtml.includes('Mastering UI Elements')) {
    throw new Error('SSR verification failed: keywords missing in HTML');
  }
  console.log('✓ Homepage SSR verified');

  // 2. API /api/posts
  const postsJson = JSON.parse(await testEndpoint('/api/posts'));
  if (!postsJson.posts || postsJson.posts.length !== 6) {
    throw new Error(`Expected 6 posts, got ${postsJson.posts?.length}`);
  }
  console.log('✓ API /api/posts returns 6 posts');

  // 3. Search query
  const searchJson = JSON.parse(await testEndpoint('/api/posts?search=Elements'));
  if (searchJson.posts.length < 1 || !searchJson.posts[0].title.includes('Mastering UI Elements')) {
    throw new Error('Search query filtering failed');
  }
  console.log(`✓ Search query filtering verified (${searchJson.posts.length} posts found)`);

  // 4. Category filter
  const catJson = JSON.parse(await testEndpoint('/api/posts?category=UX+Research'));
  if (catJson.posts.length < 1) {
    throw new Error('Category filtering failed');
  }
  console.log('✓ Category filtering verified');

  // 5. Dynamic Post route /posts/1
  const post1Html = await testEndpoint('/posts/1');
  if (!post1Html.includes('Mastering UI Elements') || !post1Html.includes('Jennifer Taylor')) {
    throw new Error('Dynamic post route failed');
  }
  console.log('✓ Dynamic post route /posts/1 verified');

  // 6. 404 on invalid post /posts/non-existent-id
  await testEndpoint('/posts/non-existent-id', 404);
  console.log('✓ Invalid post route produces 404 verified');

  console.log('--- ALL FUNCTIONAL TESTS PASSED SUCCESSFULLY! ---');
}

runTests().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
