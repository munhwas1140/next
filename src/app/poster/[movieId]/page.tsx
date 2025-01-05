import Image from 'next/image';

type Movie = {
  Title: string;
  Poster: string;
};

export default async function MoviePoster({
  params,
  searchParams,
}: {
  params: { movieId: string };
  searchParams: { plot?: 'short' | 'full' };
}) {
  const res = await fetch(
    `https://omdbapi.com/?apikey=7035c60c&i=${params.movieId}&plot=${
      searchParams.plot || 'short'
    }`,
  );
  const movie: Movie = await res.json();
  return (
    <Image src={movie.Poster} alt={movie.Title} width={300} height={450} />
  );
}
