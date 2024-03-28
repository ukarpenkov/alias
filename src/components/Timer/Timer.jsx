export const Timer = ({ s }) => {
  return (
    <div>
      <p>
        {s.toString().padStart(2, '0')}
      </p>
    </div>
  )
}