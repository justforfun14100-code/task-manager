export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-bold">
          Task Manager 
        </h1>

        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="text-xl font-semibold">
            My Tasks
          </h2>

          <p className="mt-2 text-gray-500">
            Manage your daily tasks here.
          </p>
        </div>
      </div>
    </main>
  );
}