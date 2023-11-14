interface Props {
  date: string; // e.g. 2023-10-30 12:24:00
}

function Date({ date }: Props) {
  const [ymd, time] = date.split(" ");
  const [year, month, days] = ymd.split("-");
  return (
    <div className="mb-4">
      {year}년 {month}월 {days}일 {time}
    </div>
  );
}

export default Date;
