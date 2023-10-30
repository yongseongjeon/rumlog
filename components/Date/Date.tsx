interface Props {
  date: string; // e.g. 2023-10-30 12:24:00
}

function Date({ date }: Props) {
  const [ymd, time] = date.split(" ");
  const [year, month, days] = ymd.split("-");
  return (
    <div>
      {year}년 {month}월 {days}일
    </div>
  );
}

export default Date;
