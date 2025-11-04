import { notFound } from 'next/navigation';
import { MODELS_ALL } from '@/constants/models';
import ModelId from '@/features/ModelId/ModelId';

type Props = {
  params: Promise<{ id: string }>
}

async function Example({ params }: Props) {
  const { id } = await params;

  if (!MODELS_ALL.includes(id)) {
    notFound();
  }

  return <ModelId modelId={id} />;
}

export default Example;
