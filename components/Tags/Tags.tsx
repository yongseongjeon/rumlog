interface Props {
  tags: string[];
}

function Tags({ tags }: Props) {
  return (
    <div className="flex space-x-2 justify-end">
      {tags.map((tag: string) => (
        <span key={tag} className="text-gray-500">
          #{tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
