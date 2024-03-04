import { Star } from '@/icons/Star';

export function StarsEvaluation() {
  return (
    <div className="inline">
      {[0, 1, 2, 3, 4].map((e) => (
        <Star
          key={e}
          className="cursor-pointer inline fill-[#111928] w-5 h-5"
        />
      ))}
    </div>
  );
}
