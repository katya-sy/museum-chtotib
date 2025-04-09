import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { DescBlock } from '@/components/desc-block';

const content = {
  title: 'История развития',
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export default function History() {
  return (
    <div>
      <Breadcrumbs />
      <DescBlock title={content.title} desc={content.desc} />
    </div>
  );
}
