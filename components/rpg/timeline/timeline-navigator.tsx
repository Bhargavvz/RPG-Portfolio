"use client";

import React, { useState, useEffect } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useRpg } from '@/providers/rpg-provider';
import { getYearRange, timelineEvents } from '@/lib/data/timeline-data';
import { 
  LucideChevronLeft, 
  LucideChevronRight, 
  LucideClock,
  LucideGraduationCap,
  LucideBriefcase,
  LucideCode2,
  LucideTrophy,
  LucideGamepad2
} from 'lucide-react';

const TimelineNavigator = () => {
  const { timelineYear, setTimelineYear } = useRpg();
  const [yearRange, setYearRange] = useState<[number, number]>([2020, 2025]);
  const [sliderValue, setSliderValue] = useState<number[]>([timelineYear]);
  
  useEffect(() => {
    setYearRange(getYearRange());
    setSliderValue([timelineYear]);
  }, [timelineYear]);
  
  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    setTimelineYear(value[0]);
  };
  
  const incrementYear = () => {
    if (timelineYear < yearRange[1]) {
      setTimelineYear(timelineYear + 1);
    }
  };
  
  const decrementYear = () => {
    if (timelineYear > yearRange[0]) {
      setTimelineYear(timelineYear - 1);
    }
  };
  
  const getYearEvents = (year: number) => {
    return timelineEvents.filter(event => event.year === year);
  };

  const getEventIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'education':
        return <LucideGraduationCap className="h-5 w-5 text-blue-500" />;
      case 'career':
        return <LucideBriefcase className="h-5 w-5 text-green-500" />;
      case 'project':
        return <LucideCode2 className="h-5 w-5 text-purple-500" />;
      case 'recognition':
        return <LucideTrophy className="h-5 w-5 text-yellow-500" />;
      case 'personal':
        return <LucideGamepad2 className="h-5 w-5 text-red-500" />;
      default:
        return <LucideClock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'education':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'career':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'project':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'recognition':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'personal':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };
  
  return (
    <div className="w-full space-y-4">
      <Card className="p-4 bg-gray-900 border-gray-700">
        <CardContent className="p-0">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={decrementYear} 
              disabled={timelineYear <= yearRange[0]}
              className="border-amber-600/50 hover:bg-amber-950/30"
            >
              <LucideChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center">
              <LucideClock className="h-5 w-5 mr-2 text-amber-500" />
              <span className="text-2xl font-bold text-amber-400">{timelineYear}</span>
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={incrementYear} 
              disabled={timelineYear >= yearRange[1]}
              className="border-amber-600/50 hover:bg-amber-950/30"
            >
              <LucideChevronRight className="h-4 w-4" />
            </Button>
          </div>
          
          <Slider
            defaultValue={[timelineYear]}
            max={yearRange[1]}
            min={yearRange[0]}
            step={1}
            value={sliderValue}
            onValueChange={handleSliderChange}
            className="my-4"
          />
          
          <div className="flex justify-between text-sm text-gray-400">
            <span>{yearRange[0]}</span>
            <span>{yearRange[1]}</span>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-amber-400">Key Events</h3>
          <Badge variant="outline" className="border-amber-600/50 text-amber-400">
            {getYearEvents(timelineYear).length} Events
          </Badge>
        </div>
        <div className="space-y-2">
          {getYearEvents(timelineYear).map((event, index) => (
            <Card 
              key={index} 
              className={`p-3 border transition-all hover:scale-[1.02] ${getTypeColor(event.type)}`}
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {getEventIcon(event.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="font-semibold break-words">{event.title}</h4>
                    <Badge variant="outline" className={`text-xs ${getTypeColor(event.type)}`}>
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-sm opacity-80 break-words">{event.description}</p>
                </div>
              </div>
            </Card>
          ))}
          {getYearEvents(timelineYear).length === 0 && (
            <Card className="p-4 border-amber-600/30 bg-amber-950/20">
              <p className="text-amber-400/80 italic text-center">No notable events this year.</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineNavigator;