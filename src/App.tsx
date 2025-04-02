import { Button } from './components/Button';
import { Card } from './components/Card';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary-600 mb-6">Design System</h1>
        <p className="text-gray-700 mb-8">
          Welcome to our design system. This is a collection of reusable components built with React and Tailwind CSS.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card title="Button Component" variant="elevated">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Variants</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Sizes</h3>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">States</h3>
                <div className="flex flex-wrap gap-2">
                  <Button isLoading>Loading</Button>
                  <Button isDisabled>Disabled</Button>
                </div>
              </div>
            </div>
          </Card>
          
          <Card title="Card Component" variant="elevated">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Variants</h3>
                <div className="space-y-4">
                  <Card variant="elevated" title="Elevated Card" className="w-full">
                    <p className="text-gray-600">This is an elevated card with a shadow.</p>
                  </Card>
                  
                  <Card variant="outlined" title="Outlined Card" className="w-full">
                    <p className="text-gray-600">This is an outlined card with a border.</p>
                  </Card>
                  
                  <Card variant="filled" title="Filled Card" className="w-full">
                    <p className="text-gray-600">This is a filled card with a background color.</p>
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default App
