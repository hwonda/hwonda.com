interface EmptyStateProps {
  activeYear: string;
  activeTechStacks: string[];
  onReset: () => void;
}

export default function EmptyState({
  activeYear,
  activeTechStacks,
  onReset,
}: EmptyStateProps) {
  if (activeTechStacks.length === 0) return null;

  return (
    <div className="bg-gray8/40 text-gray1 flex h-40 flex-col items-center justify-center rounded-lg backdrop-blur-sm">
      <p className="mb-2 text-lg font-medium">
        {activeYear === 'all' ? '' : `${activeYear} `}
        <span className="text-accent-1">
          {activeTechStacks.join(', ')}
        </span>{' '}
        기술을 {activeTechStacks.length > 1 ? '모두 사용한' : '사용한'}{' '}
        프로젝트가 없습니다.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="bg-gray7 text-gray1 hover:bg-gray6 mt-2 rounded-full px-4 py-1.5 text-sm"
      >
        기술 필터 초기화
      </button>
    </div>
  );
}
