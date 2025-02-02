interface SolutionProps {
  solution: string;
}

const Solution = ({ solution }: SolutionProps) => (
  <div className="mt-4 p-4 bg-gray-700 rounded-lg">
    <h2 className="text-lg font-bold">Detailed Solution:</h2>
    <p>{solution}</p>
  </div>
);

export default Solution;
