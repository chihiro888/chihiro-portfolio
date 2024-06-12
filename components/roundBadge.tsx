interface RoundBadgeType {
  label: string
  filled?: boolean
}

const RoundBadge = ({ label, filled }: RoundBadgeType) => {
  const badgeClasses = filled
    ? 'rounded-full bg-blue-500 border-blue-500 text-white px-3 py-2 text-sm mb-3 mr-2'
    : 'rounded-full border border-slate-300 text-slate-700 px-3 py-2 text-sm mb-3 mr-2'

  return <div className={badgeClasses}>{label}</div>
}

export default RoundBadge
