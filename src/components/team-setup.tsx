
"use client";

import type { Team } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type TeamSetupProps = {
  teams: Team[];
};

export default function TeamSetup({ teams }: TeamSetupProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Equipos Participantes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teams.map((team) => (
            <div key={team.id} className="text-sm font-medium p-2 rounded-md bg-muted">
              {team.name}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
