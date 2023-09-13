import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../index';
import { TabsListProps } from './types';
import Text from '../../Text';

export default {
  title: 'Components/Tabs/TabsList',
  component: Tabs.List,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Tabs.Root defaultValue="tab1">
        {Story()}
        <Tabs.Content value="tab1" className="p-4">
          Conteúdo da tab 1
        </Tabs.Content>
        <Tabs.Content value="tab2" className="p-4">
          Conteúdo da tab 2
        </Tabs.Content>
        <Tabs.Content value="tab3" className="p-4">
          Conteúdo da tab 3
        </Tabs.Content>
      </Tabs.Root>
    ),
  ],
} as Meta<TabsListProps>;

export const Default: StoryObj<TabsListProps> = {};

export const Themes: StoryObj<TabsListProps> = {
  args: {
    theme: 'default',
  },
  decorators: [
    (Story) => (
      <div className="flex flex-wrap gap-4">
        <div className="w-72 flex flex-col items-center p-8">
          <Text weight="semibold" color="grayscale300" className="mb-2">
            Default
          </Text>
          <Tabs.Root defaultValue="tab1">
            {Story({
              args: {
                theme: 'default',
                children: (
                  <>
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                  </>
                ),
              },
            })}
            <Tabs.Content value="tab1" className="p-4">
              Conteúdo da tab 1
            </Tabs.Content>
            <Tabs.Content value="tab2" className="p-4">
              Conteúdo da tab 2
            </Tabs.Content>
            <Tabs.Content value="tab3" className="p-4">
              Conteúdo da tab 3
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="w-72 flex flex-col items-center p-8">
          <Text weight="semibold" color="grayscale300" className="mb-2">
            White
          </Text>
          <Tabs.Root defaultValue="tab1">
            {Story({
              args: {
                theme: 'white',
                children: (
                  <>
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                  </>
                ),
              },
            })}
            <Tabs.Content value="tab1" className="p-4">
              Conteúdo da tab 1
            </Tabs.Content>
            <Tabs.Content value="tab2" className="p-4">
              Conteúdo da tab 2
            </Tabs.Content>
            <Tabs.Content value="tab3" className="p-4">
              Conteúdo da tab 3
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="w-72 flex flex-col items-center p-8">
          <Text weight="semibold" color="grayscale300" className="mb-2">
            Dark
          </Text>
          <Tabs.Root defaultValue="tab1">
            {Story({
              args: {
                theme: 'dark',
                children: (
                  <>
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                  </>
                ),
              },
            })}
            <Tabs.Content value="tab1" className="p-4">
              Conteúdo da tab 1
            </Tabs.Content>
            <Tabs.Content value="tab2" className="p-4">
              Conteúdo da tab 2
            </Tabs.Content>
            <Tabs.Content value="tab3" className="p-4">
              Conteúdo da tab 3
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="w-72 flex flex-col items-center p-8">
          <Text weight="semibold" color="grayscale300" className="mb-2">
            Dark underline
          </Text>
          <Tabs.Root defaultValue="tab1">
            {Story({
              args: {
                theme: 'darkUnderline',
                children: (
                  <>
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                  </>
                ),
              },
            })}
            <Tabs.Content value="tab1" className="p-4">
              Conteúdo da tab 1
            </Tabs.Content>
            <Tabs.Content value="tab2" className="p-4">
              Conteúdo da tab 2
            </Tabs.Content>
            <Tabs.Content value="tab3" className="p-4">
              Conteúdo da tab 3
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="w-72 flex flex-col items-center p-8">
          <Text weight="semibold" color="grayscale300" className="mb-2">
            Primary underline
          </Text>
          <Tabs.Root defaultValue="tab1">
            {Story({
              args: {
                theme: 'primaryUnderline',
                children: (
                  <>
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                  </>
                ),
              },
            })}
            <Tabs.Content value="tab1" className="p-4">
              Conteúdo da tab 1
            </Tabs.Content>
            <Tabs.Content value="tab2" className="p-4">
              Conteúdo da tab 2
            </Tabs.Content>
            <Tabs.Content value="tab3" className="p-4">
              Conteúdo da tab 3
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="w-72 flex flex-col items-center p-8">
          <Text weight="semibold" color="grayscale300" className="mb-2">
            Left dark underline
          </Text>
          <Tabs.Root defaultValue="tab1">
            {Story({
              args: {
                theme: 'leftDarkUnderline',
                children: (
                  <>
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                  </>
                ),
              },
            })}
            <Tabs.Content value="tab1" className="p-4">
              Conteúdo da tab 1
            </Tabs.Content>
            <Tabs.Content value="tab2" className="p-4">
              Conteúdo da tab 2
            </Tabs.Content>
            <Tabs.Content value="tab3" className="p-4">
              Conteúdo da tab 3
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="w-72 flex flex-col items-center p-8">
          <Text weight="semibold" color="grayscale300" className="mb-2">
            Right dark underline
          </Text>
          <Tabs.Root defaultValue="tab1">
            {Story({
              args: {
                theme: 'rightDarkUnderline',
                children: (
                  <>
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                  </>
                ),
              },
            })}
            <Tabs.Content value="tab1" className="p-4">
              Conteúdo da tab 1
            </Tabs.Content>
            <Tabs.Content value="tab2" className="p-4">
              Conteúdo da tab 2
            </Tabs.Content>
            <Tabs.Content value="tab3" className="p-4">
              Conteúdo da tab 3
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="w-72 flex flex-col items-center p-8">
          <Text weight="semibold" color="grayscale300" className="mb-2">
            Left primary underline
          </Text>
          <Tabs.Root defaultValue="tab1">
            {Story({
              args: {
                theme: 'leftPrimaryUnderline',
                children: (
                  <>
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                  </>
                ),
              },
            })}
            <Tabs.Content value="tab1" className="p-4">
              Conteúdo da tab 1
            </Tabs.Content>
            <Tabs.Content value="tab2" className="p-4">
              Conteúdo da tab 2
            </Tabs.Content>
            <Tabs.Content value="tab3" className="p-4">
              Conteúdo da tab 3
            </Tabs.Content>
          </Tabs.Root>
        </div>

        <div className="w-72 flex flex-col items-center p-8">
          <Text weight="semibold" color="grayscale300" className="mb-2">
            Right primary underline
          </Text>
          <Tabs.Root defaultValue="tab1">
            {Story({
              args: {
                theme: 'rightPrimaryUnderline',
                children: (
                  <>
                    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
                  </>
                ),
              },
            })}
            <Tabs.Content value="tab1" className="p-4">
              Conteúdo da tab 1
            </Tabs.Content>
            <Tabs.Content value="tab2" className="p-4">
              Conteúdo da tab 2
            </Tabs.Content>
            <Tabs.Content value="tab3" className="p-4">
              Conteúdo da tab 3
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    ),
  ],
};

export const Rounded: StoryObj<TabsListProps> = {
  args: {
    theme: 'white',
    rounded: true,
  },
};
