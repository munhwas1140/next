interface LoaderProps {
  color?: string;
}

export default function Loader({ color = "#e96900" }: LoaderProps) {
  return (
    <h2
      style={{
        color: color,
      }}
    >
      로딩 중 ..
    </h2>
  );
}
