/**
 * TiptapEditor 툴바 아이콘 모음 (my-app)
 * - 각 아이콘은 SVGProps를 그대로 받아 size/style/className 등을 호출부에서 덮어쓸 수 있음
 * - stroke="currentColor" 라서 버튼 글자색을 따라감
 */
import type { SVGProps } from "react";

/** 굵게 (Bold) */
export function BoldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 5h5.5a3.25 3.25 0 0 1 0 6.5H7z" />
      <path d="M7 11.5h6.5a3.25 3.25 0 0 1 0 6.5H7z" />
    </svg>
  );
}

/** 기울임 (Italic) */
export function ItalicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="14" y1="5" x2="19" y2="5" />
      <line x1="5" y1="19" x2="10" y2="19" />
      <line x1="15" y1="5" x2="9" y2="19" />
    </svg>
  );
}

/** 취소선 (Strike) */
export function StrikeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="12" x2="20" y2="12" />
      <path d="M16 7.5A4 4 0 0 0 8 8c0 1.6 1.2 2.6 3.5 3.2" />
      <path d="M7.5 16.5A4 4 0 0 0 16 16" />
    </svg>
  );
}

/** 밑줄 (Underline) */
export function UnderlineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 4v7a5 5 0 0 0 10 0V4" />
      <line x1="5" y1="20" x2="19" y2="20" />
    </svg>
  );
}

/** 글자색 (Text color) - A 모양 */
export function TextColorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 16L11 6l5 10" />
      <line x1="7.6" y1="12.5" x2="14.4" y2="12.5" />
    </svg>
  );
}

/** 배경색/형광펜 (Background color) */
export function HighlighterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 4l7 7-7 7-2-2 1.5-1.5-5-5L8 8z" />
      <line x1="4" y1="17" x2="20" y2="17" />
      <path d="M11 9l-5 5" />
    </svg>
  );
}

/** 왼쪽 정렬 (Align left) */
export function AlignLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="10.5" x2="13" y2="10.5" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="4" y1="19.5" x2="13" y2="19.5" />
    </svg>
  );
}

/** 가운데 정렬 (Align center) */
export function AlignCenterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="7.5" y1="10.5" x2="16.5" y2="10.5" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="7.5" y1="19.5" x2="16.5" y2="19.5" />
    </svg>
  );
}

/** 오른쪽 정렬 (Align right) */
export function AlignRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="11" y1="10.5" x2="20" y2="10.5" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="11" y1="19.5" x2="20" y2="19.5" />
    </svg>
  );
}

/** 글머리 기호 목록 (Bullet list) */
export function BulletListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="5" cy="7" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="5" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="5" cy="17" r="1.4" fill="currentColor" stroke="none" />
      <line x1="10" y1="7" x2="20" y2="7" />
      <line x1="10" y1="12" x2="20" y2="12" />
      <line x1="10" y1="17" x2="20" y2="17" />
    </svg>
  );
}

/** 번호 매기기 목록 (Ordered list) */
export function OrderedListIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="10" y1="7" x2="20" y2="7" />
      <line x1="10" y1="12" x2="20" y2="12" />
      <line x1="10" y1="17" x2="20" y2="17" />
      <path d="M4 6.5h1.4V10M4 10h2.2" />
      <path d="M4.2 14.5a1.1 1.1 0 1 1 1.7 1.3L4 18h2.4" />
    </svg>
  );
}

/** 인용 (Blockquote) */
export function BlockquoteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 7H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1c0 2-1 3-2.5 3.5" />
      <path d="M20 7h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1c0 2-1 3-2.5 3.5" />
    </svg>
  );
}

/** 코드 블럭 (Code block) */
export function CodeBlockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="9 8 6 12 9 16" />
      <polyline points="15 8 18 12 15 16" />
      <line x1="13" y1="6" x2="11" y2="18" />
    </svg>
  );
}

/** 링크 (Link) */
export function LinkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 12h6" />
      <path d="M10 8H8a4 4 0 0 0 0 8h2" />
      <path d="M14 8h2a4 4 0 0 1 0 8h-2" />
    </svg>
  );
}

/** 표 (Table) */
export function TableIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <line x1="4" y1="10" x2="20" y2="10" />
      <line x1="4" y1="14.5" x2="20" y2="14.5" />
      <line x1="9.5" y1="5" x2="9.5" y2="19" />
      <line x1="14.5" y1="5" x2="14.5" y2="19" />
    </svg>
  );
}

/** 위에 행 추가 */
export function AddRowAboveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="10" width="16" height="9" rx="1.5" />
      <line x1="4" y1="14.5" x2="20" y2="14.5" />
      <line x1="9.5" y1="10" x2="9.5" y2="19" />
      <line x1="14.5" y1="10" x2="14.5" y2="19" />
      <line x1="12" y1="3" x2="12" y2="7" />
      <line x1="10" y1="5" x2="14" y2="5" />
    </svg>
  );
}

/** 아래 행 추가 */
export function AddRowBelowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="5" width="16" height="9" rx="1.5" />
      <line x1="4" y1="9.5" x2="20" y2="9.5" />
      <line x1="9.5" y1="5" x2="9.5" y2="14" />
      <line x1="14.5" y1="5" x2="14.5" y2="14" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="10" y1="19" x2="14" y2="19" />
    </svg>
  );
}

/** 왼쪽 열 추가 */
export function AddColumnLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="10" y="4" width="9" height="16" rx="1.5" />
      <line x1="14.5" y1="4" x2="14.5" y2="20" />
      <line x1="10" y1="9.5" x2="19" y2="9.5" />
      <line x1="10" y1="14.5" x2="19" y2="14.5" />
      <line x1="3" y1="12" x2="7" y2="12" />
      <line x1="5" y1="10" x2="5" y2="14" />
    </svg>
  );
}

/** 오른쪽 열 추가 */
export function AddColumnRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="5" y="4" width="9" height="16" rx="1.5" />
      <line x1="9.5" y1="4" x2="9.5" y2="20" />
      <line x1="5" y1="9.5" x2="14" y2="9.5" />
      <line x1="5" y1="14.5" x2="14" y2="14.5" />
      <line x1="17" y1="12" x2="21" y2="12" />
      <line x1="19" y1="10" x2="19" y2="14" />
    </svg>
  );
}

/** 셀 병합 */
export function MergeCellsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="12" y1="5" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="19" />
    </svg>
  );
}

/** 셀 분할 */
export function SplitCellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="5" width="16" height="14" rx="1.5" />
      <line x1="12" y1="5" x2="12" y2="19" />
    </svg>
  );
}

/** 행 삭제 */
export function DeleteRowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="14" height="14" rx="1.2" />
      <line x1="3" y1="9" x2="17" y2="9" />
      <line x1="3" y1="13" x2="17" y2="13" />
      <line x1="7.5" y1="4" x2="7.5" y2="18" />
      <line x1="12.5" y1="4" x2="12.5" y2="18" />
      <line x1="20" y1="11" x2="24" y2="11" />
    </svg>
  );
}

/** 열 삭제 */
export function DeleteColumnIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="5" width="16" height="14" rx="1.2" />
      <line x1="4" y1="10" x2="20" y2="10" />
      <line x1="4" y1="14" x2="20" y2="14" />
      <line x1="9.5" y1="5" x2="9.5" y2="19" />
      <line x1="14.5" y1="5" x2="14.5" y2="19" />
      <line x1="10" y1="23" x2="14" y2="23" />
    </svg>
  );
}

/** 표 삭제 */
export function DeleteTableIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 7h12l-1 12.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19.5z" />
      <path d="M4 7h16" />
      <path d="M9 7V5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
}

/** 이미지 (Image) */
export function ImageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.5" />
      <path d="M21 16l-4.5-4.5L5 19" />
    </svg>
  );
}

/** 실행 취소 (Undo) */
export function UndoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="9 14 4 9 9 4" />
      <path d="M4 9h10a6 6 0 0 1 0 12H8" />
    </svg>
  );
}

/** 다시 실행 (Redo) */
export function RedoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="15 14 20 9 15 4" />
      <path d="M20 9H10a6 6 0 0 0 0 12h6" />
    </svg>
  );
}
