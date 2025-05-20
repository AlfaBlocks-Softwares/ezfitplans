interface MessageBoxProps {
  message: string;
  time: string;
  isSender: boolean;
}

export default function MessageBox({
  message,
  time,
  isSender,
}: MessageBoxProps) {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-[70%] rounded-xl px-4 py-2 text-sm relative ${
          isSender
            ? "bg-secondary text-primary rounded-br-none max-w-[550px]"
            : "bg-muted text-black rounded-bl-none max-w-[850px]"
        }`}
      >
        {message}
        <div className="text-xs text-right mt-1 opacity-70">{time}</div>
      </div>
    </div>
  );
}
