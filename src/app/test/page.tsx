import { prisma } from '@/lib/db';

const Page = async () => {
  const voices = await prisma.voice.findMany();

  console.log(voices);

  return <div>Page</div>;
};

export default Page;
