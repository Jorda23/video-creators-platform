interface VideoPageProps {
  params: { id: string };
}

export default function VideoDetailsPage({ params }: VideoPageProps) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold">
        Video ID: {params.id}
      </h2>
    </div>
  );
}
