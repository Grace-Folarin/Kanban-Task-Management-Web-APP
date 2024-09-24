import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-lines_light dark:bg-very_dark_grey h-screen relative">
      <h1 className="text-5xl font-bold text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        Kanban Task Management App
      </h1>
    </div>
  );
}
