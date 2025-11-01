
"use client";

import type { Game, Team } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Fragment } from "react";

type ScheduleCardProps = {
  title: string;
  games: Game[];
  teams: Team[];
  onGameChange: (gameId: number, field: keyof Game, value: string) => void;
  gameCount: number;
  footer?: React.ReactNode;
};

export default function ScheduleCard({
  title,
  games,
  teams,
  onGameChange,
  footer,
}: ScheduleCardProps) {
  const getTeamName = (teamId: string) => {
    return teams.find((t) => String(t.id) === teamId)?.name || "Unknown Team";
  };
  
  let lastDay: string | undefined = undefined;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Select teams and enter scores for each game.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {games.map((game, index) => {
          const showDay = game.day && game.day !== lastDay;
          if (showDay) {
            lastDay = game.day;
          }
          return (
            <Fragment key={game.id}>
              {showDay && <h3 className="font-bold text-lg pt-4">{game.day}</h3>}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-muted-foreground">
                  Game {index + 1} {game.time && `/ ${game.time}`}
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_min-content_2fr_1fr] gap-2 items-center">
                   <div className="p-2 text-sm text-center rounded-md bg-muted">
                    {getTeamName(game.team1Id)}
                  </div>
                  <Input
                    type="number"
                    placeholder="Score"
                    value={game.score1}
                    onChange={(e) =>
                      onGameChange(game.id, "score1", e.target.value)
                    }
                  />
                  <span className="text-center text-muted-foreground font-semibold">
                    VS
                  </span>
                   <div className="p-2 text-sm text-center rounded-md bg-muted">
                    {getTeamName(game.team2Id)}
                  </div>
                  <Input
                    type="number"
                    placeholder="Score"
                    value={game.score2}
                    onChange={(e) =>
                      onGameChange(game.id, "score2", e.target.value)
                    }
                  />
                </div>
              </div>
            </Fragment>
          );
        })}
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}
