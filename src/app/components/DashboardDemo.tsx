import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Users, 
  Clock, 
  TrendingUp, 
  Download,
  Bell,
  Calendar,
  BarChart3,
  Activity
} from 'lucide-react';

export function DashboardDemo() {
  const [selectedDate, setSelectedDate] = useState('today');
  const [showAlertModal, setShowAlertModal] = useState(false);

  const kpiData = {
    footfall: { value: '2,847', change: '+12%', trend: 'up' },
    avgDwell: { value: '14m 32s', change: '-3%', trend: 'down' },
    peakHour: { value: '2:30 PM', change: '47% peak', trend: 'neutral' },
    conversion: { value: '23.4%', change: '+5.2%', trend: 'up' }
  };

  const heatmapData = [
    { zone: 'Entrance', intensity: 85, visitors: 847 },
    { zone: 'Product Display A', intensity: 72, visitors: 634 },
    { zone: 'Checkout Area', intensity: 90, visitors: 721 },
    { zone: 'Product Display B', intensity: 45, visitors: 332 },
    { zone: 'Rest Area', intensity: 25, visitors: 187 },
    { zone: 'Information Desk', intensity: 55, visitors: 423 }
  ];

  const alertSettings = [
    { name: 'Occupancy Limit', threshold: '500 people', status: 'active' },
    { name: 'Queue Length', threshold: '> 10 people', status: 'active' },
    { name: 'Dwell Time Alert', threshold: '> 30 minutes', status: 'inactive' }
  ];

  return (
    <div className="min-h-screen bg-secondary p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-gray-900 mb-2">People Counting Dashboard</h1>
              <p className="text-gray-600">Real-time analytics and insights for your space</p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-accent border-accent">
                ● Live Data
              </Badge>
              <select 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>
        </div>

        {/* KPI Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Footfall Today</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.footfall.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={`${kpiData.footfall.trend === 'up' ? 'text-accent' : 'text-destructive'}`}>
                  {kpiData.footfall.change}
                </span> from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Dwell Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.avgDwell.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={`${kpiData.avgDwell.trend === 'up' ? 'text-accent' : 'text-destructive'}`}>
                  {kpiData.avgDwell.change}
                </span> from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Peak Hour</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.peakHour.value}</div>
              <p className="text-xs text-muted-foreground">
                {kpiData.peakHour.change} occupancy
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpiData.conversion.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-accent">
                  {kpiData.conversion.change}
                </span> from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Heatmap Visualization */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Zone Heatmap
                </CardTitle>
                <CardDescription>
                  Visitor density across different areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {heatmapData.map((zone, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="font-medium text-sm">{zone.zone}</div>
                        <div className="text-xs text-gray-500">{zone.visitors} visitors</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full transition-all duration-300"
                            style={{ 
                              width: `${zone.intensity}%`,
                              background: zone.intensity > 70 ? '#EF4444' : 
                                         zone.intensity > 40 ? '#F59E0B' : '#10B981'
                            }}
                          />
                        </div>
                        <div className="text-sm font-medium w-10 text-right">
                          {zone.intensity}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Date Range Selector */}
                <div className="mt-6 pt-4 border-t">
                  <Tabs defaultValue="hour" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="hour">Hourly</TabsTrigger>
                      <TabsTrigger value="day">Daily</TabsTrigger>
                      <TabsTrigger value="week">Weekly</TabsTrigger>
                      <TabsTrigger value="month">Monthly</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Control Panel */}
          <div className="space-y-6">
            {/* Export Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Export Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Download CSV Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Report
                </Button>
                <div className="text-xs text-gray-500 mt-2">
                  CSV Format: timestamp, zone_id, in_count, out_count, total_dwell_seconds
                </div>
              </CardContent>
            </Card>

            {/* Alert Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Alert Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {alertSettings.map((alert, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-sm">{alert.name}</div>
                      <div className="text-xs text-gray-500">{alert.threshold}</div>
                    </div>
                    <Badge 
                      variant={alert.status === 'active' ? 'default' : 'secondary'}
                      className={alert.status === 'active' ? 'bg-accent' : ''}
                    >
                      {alert.status}
                    </Badge>
                  </div>
                ))}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-4"
                  onClick={() => setShowAlertModal(true)}
                >
                  Configure Alerts
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Entries</span>
                  <span className="font-medium">2,847</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total Exits</span>
                  <span className="font-medium">2,719</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Current Occupancy</span>
                  <span className="font-medium text-accent">128</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Max Occupancy</span>
                  <span className="font-medium">234</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alert Modal */}
        {showAlertModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-md">
              <CardHeader>
                <CardTitle>Set Alert Threshold</CardTitle>
                <CardDescription>
                  Configure when you want to receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Alert Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Occupancy Limit</option>
                    <option>Queue Length</option>
                    <option>Dwell Time</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Threshold Value</label>
                  <input 
                    type="number" 
                    placeholder="500"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setShowAlertModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    className="flex-1"
                    onClick={() => setShowAlertModal(false)}
                  >
                    Save Alert
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}