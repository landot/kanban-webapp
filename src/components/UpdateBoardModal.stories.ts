import type { Meta, StoryObj } from '@storybook/react';
import { UpdateBoardModal } from './UpdateBoardModal';

const meta = {
  title: 'UpdateBoardModal',
  component: UpdateBoardModal,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof UpdateBoardModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Add: Story = {
  args: {
    updateType: 'add'
  },
};

export const Edit: Story = {
  args: {
    updateType: 'edit',
    prefill: {
      name: 'Board Name',
      columns: ['Todo', 'Doing']
    }
  },
};