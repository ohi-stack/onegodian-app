import type { Metadata } from 'next';
import BeliefMapperClient from './BeliefMapperClient';

export const metadata: Metadata = {
  title: 'Belief Mapper | OneGodian App',
  description: 'A short, privacy-first reflection experience based on the OneGodian Experience Layer.',
};

export default function BeliefMapperPage() {
  return <BeliefMapperClient />;
}
