import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const accinVortexPlayers = [
    { number: 1, name: "JORGE SEGURA", role: "PITCHER", placeOfBirth: "GUATEMALA" },
    { number: 2, name: "JUAN DIEGO MORALES", role: "PITCHER", placeOfBirth: "GUATEMALA" },
    { number: 3, name: "JUAN JOSÉ PEPE", role: "PITCHER", placeOfBirth: "ARGENTINA" },
    { number: 14, name: "LEONARDO BRESS", role: "PITCHER", placeOfBirth: "ARGENTINA" },
    { number: 27, name: "LUIS TORREJÓN", role: "CATCHER", placeOfBirth: "ARGENTINA" },
    { number: 4, name: "FAUSTO SIVIERO", role: "CATCHER", placeOfBirth: "ARGENTINA" },
    { number: 52, name: "MANUEL GODOY", role: "INFIELDER", placeOfBirth: "ARGENTINA" },
    { number: 8, name: "FEDERICO OLHEISER", role: "INFIELDER", placeOfBirth: "ARGENTINA" },
    { number: 10, name: "FRANCO ORTELLADO", role: "INFIELDER", placeOfBirth: "ARGENTINA" },
    { number: 5, name: "FELIPE MUÑOZ", role: "INFIELDER", placeOfBirth: "ARGENTINA" },
    { number: 66, name: "NAHIM BRAHIM", role: "OUTFIELDER", placeOfBirth: "ARGENTina" },
    { number: 7, name: "JUNIOR GUAPE", role: "OUTFIELDER", placeOfBirth: "ARGENTINA" },
    { number: 8, name: "LAUTARO FERRARA", role: "OUTFIELDER", placeOfBirth: "ARGENTINA" },
    { number: 13, name: "MARCOS PORCO", role: "OUTFIELDER", placeOfBirth: "ARGENTINA" },
    { number: 31, name: "LAUTARO GARCÍA", role: "OUTFIELDER", placeOfBirth: "ARGENTINA" },
    { number: 32, name: "JOSÉ DORANTES", role: "UTILITY", placeOfBirth: "VENEZUELA" },
    { number: 82, name: "GUSTAVO GODOY", role: "COACH", placeOfBirth: "ARGENTINA" },
    { number: 18, name: "ÁLVARO QUISPE", role: "COACH", placeOfBirth: "ARGENTINA" },
    { number: 33, name: "CHRISTIAN RIAL", role: "TEAM PRINCIPAL", placeOfBirth: "ARGENTINA" },
    { number: 6, name: "IVÁN FURMAN", role: "HEAD COACH", placeOfBirth: "ARGENTINA" },
    { number: 22, name: "MARIO PORCO", role: "HEAD COACH", placeOfBirth: "ARGENTINA" },
]

const initialTeamsData = [
    { id: 1, name: "ACCIN VORTEX (ARG)", players: accinVortexPlayers },
    { id: 2, name: "CACIQUES BY SWING (CHI)", players: [] },
    { id: 3, name: "CITY PAN (CHI)", players: [] },
    { id: 4, name: "MAYO'S (MEX)", players: [] },
    { id: 5, name: "SOUTH ARGENTINA (ARG)", players: [] },
    { id: 6, name: "TEAM FINCA JUJURE (VEN)", players: [] },
]

const gamesData = [
    { id: 1, team1Id: 2, team2Id: 4, day: "DÍA 1: Miércoles, 18 de marzo", time: "10:15", score1: 8, hits1: 10, errors1: 1, score2: 9, hits2: 11, errors2: 0, innings: JSON.stringify([["1", "2"], ["1", "0"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "2"]]) },
    { id: 2, team1Id: 1, team2Id: 6, day: "DÍA 1: Miércoles, 18 de marzo", time: "13:15", score1: 5, hits1: 7, errors1: 2, score2: 7, hits2: 9, errors2: 1, innings: JSON.stringify([["1", "0"], ["0", "0"], ["1", "1"], ["1", "0"], ["0", "1"], ["1", "5"], ["1", "X"]]) },
    { id: 3, team1Id: 3, team2Id: 5, day: "DÍA 1: Miércoles, 18 de marzo", time: "16:15", score1: 3, hits1: 3, errors1: 3, score2: 4, hits2: 4, errors2: 4, innings: JSON.stringify([["1", "0"], ["0", "0"], ["1", "0"], ["1", "0"], ["0", "0"], ["0", "4"], ["0", "X"]]) },
    { id: 4, team1Id: 1, team2Id: 5, day: "DÍA 1: Miércoles, 18 de marzo", time: "21:00" },
    { id: 5, team1Id: 3, team2Id: 6, day: "DÍA 2: Jueves, 19 de marzo", time: "10:15" },
    { id: 6, team1Id: 2, team2Id: 5, day: "DÍA 2: Jueves, 19 de marzo", time: "13:15" },
    { id: 7, team1Id: 4, team2Id: 1, day: "DÍA 2: Jueves, 19 de marzo", time: "16:15" },
    { id: 8, team1Id: 3, team2Id: 2, day: "DÍA 2: Jueves, 19 de marzo", time: "21:00" },
    { id: 9, team1Id: 5, team2Id: 6, day: "DÍA 3: Viernes, 20 de marzo", time: "10:15" },
    { id: 10, team1Id: 4, team2Id: 3, day: "DÍA 3: Viernes, 20 de marzo", time: "13:15" },
    { id: 11, team1Id: 2, team2Id: 1, day: "DÍA 3: Viernes, 20 de marzo", time: "16:15" },
    { id: 12, team1Id: 6, team2Id: 4, day: "DÍA 3: Viernes, 20 de marzo", time: "21:00" },
    { id: 13, team1Id: 1, team2Id: 3, day: "DÍA 4: Sábado, 21 de marzo", time: "12:00" },
    { id: 14, team1Id: 6, team2Id: 2, day: "DÍA 4: Sábado, 21 de marzo", time: "15:00" },
    { id: 15, team1Id: 5, team2Id: 4, day: "DÍA 4: Sábado, 21 de marzo", time: "18:00" },
]

async function main() {
    console.log('Start seeding ...')

    for (const t of initialTeamsData) {
        const team = await prisma.team.upsert({
            where: { id: t.id },
            update: {},
            create: {
                id: t.id,
                name: t.name,
                players: {
                    create: t.players,
                },
            },
        })
        console.log(`Created team with id: ${team.id}`)
    }

    for (const g of gamesData) {
        const game = await prisma.game.upsert({
            where: { id: g.id },
            update: {},
            create: {
                id: g.id,
                team1Id: g.team1Id,
                team2Id: g.team2Id,
                day: g.day,
                time: g.time,
                score1: g.score1,
                hits1: g.hits1,
                errors1: g.errors1,
                score2: g.score2,
                hits2: g.hits2,
                errors2: g.errors2,
                innings: g.innings || "[]"
            }
        })
        console.log(`Created game with id: ${game.id}`)
    }

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
