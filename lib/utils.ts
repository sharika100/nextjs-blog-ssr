/**
 * Shared styling utility functions
 */

export function getTagStyle(tag: string): string {
  const lower = tag.toLowerCase();
  if (lower.includes("design")) {
    return "bg-[#E0F2FE] text-[#0284C7] hover:bg-[#BAE6FD]"; // Light blue
  }
  if (lower.includes("management")) {
    return "bg-[#F3E8FF] text-[#7E22CE] hover:bg-[#E9D5FF]"; // Light purple
  }
  if (lower.includes("web") || lower.includes("dev") || lower.includes("front")) {
    return "bg-[#DCFCE7] text-[#15803D] hover:bg-[#BBF7D0]"; // Light green
  }
  if (lower.includes("research") || lower.includes("ux")) {
    return "bg-[#FEF3C7] text-[#B45309] hover:bg-[#FDE68A]"; // Light amber
  }
  if (lower.includes("qa") || lower.includes("engineering")) {
    return "bg-[#FEE2E2] text-[#B91C1C] hover:bg-[#FECDD3]"; // Light rose
  }
  return "bg-slate-100 text-slate-700 hover:bg-slate-200";
}
