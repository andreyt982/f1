export default function Countdown() {
  return (
    <div className="countdown h-screen relative">
      <iframe src="https://f1-countdown.com/" width={"100%"} height={"100%"} className=""></iframe>
      <div className="absolute bottom-0 f"></div>
    </div>
  );
}
