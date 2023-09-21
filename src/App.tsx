import { useEffect, useState } from 'react';

import { addDarkClassToHtml, removeDarkClassFromHtml } from './utils/darkmode';

import { Button, Switch } from './lib';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      addDarkClassToHtml();
    } else {
      removeDarkClassFromHtml();
    }
  }, [darkMode]);

  return (
    <>
      <div className="bg-light dark:bg-dark">
        <div className="flex gap-2 absolute right-4 top-4">
          <p>Dark Mode</p>
          <Switch
            checked={darkMode}
            onCheckedChange={() => setDarkMode(!darkMode)}
          />
        </div>
        <div className="w-full h-full min-h-screen flex flex-col items-center py-16 dark:bg-grayscale-900">
          <p className="text-xl font-bold mb-4 text-center text-light bg-primary-600 p-2 rounded">
            Artemis UI
          </p>
          <h1 className="text-4xl font-bold mb-4">
            BlastZone: Component Playground 💣
          </h1>

          <div className="flex-1 w-full max-w-[900px] bg-grayscale-50/50 dark:bg-grayscale-950 rounded-xl p-4">
            <div className="flex items-center gap-1">
              <Button.Root>
                <Button.Label>Botão</Button.Label>
              </Button.Root>
              <Switch size="sm" />
              <Switch size="md" />
              <Switch size="lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
