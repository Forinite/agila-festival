"use client";
import React, { useState, useEffect, useRef } from "react";

interface Player {
    x: number;
    y: number;
    vy: number;
    onGround: boolean;
    jumpsLeft: number;
}

const GRAVITY = 0.6;
const MOVE_SPEED = 4;
const JUMP_FORCE = -12;
const GAME_WIDTH = 800;
const GAME_HEIGHT = 400;
const GROUND_HEIGHT = 40;

export default function PlatformerGame() {
    const [player, setPlayer] = useState<Player>({
        x: 50,
        y: GAME_HEIGHT - GROUND_HEIGHT - 50,
        vy: 0,
        onGround: false,
        jumpsLeft: 2,
    });
    const [keys, setKeys] = useState<{ [key: string]: boolean }>({});
    const [gameWon, setGameWon] = useState(false);

    const obstacles = [
        { x: 300, y: GAME_HEIGHT - GROUND_HEIGHT - 50, width: 50, height: 50 },
        { x: 500, y: GAME_HEIGHT - GROUND_HEIGHT - 100, width: 50, height: 100 },
    ];

    const coin = { x: 700, y: GAME_HEIGHT - GROUND_HEIGHT - 30, size: 30 };

    // Handle key presses
    useEffect(() => {
        const handleDown = (e: KeyboardEvent) => {
            setKeys(k => ({ ...k, [e.code]: true }));
        };
        const handleUp = (e: KeyboardEvent) => {
            setKeys(k => ({ ...k, [e.code]: false }));
        };
        window.addEventListener("keydown", handleDown);
        window.addEventListener("keyup", handleUp);
        return () => {
            window.removeEventListener("keydown", handleDown);
            window.removeEventListener("keyup", handleUp);
        };
    }, []);

    // Game loop
    useEffect(() => {
        const loop = setInterval(() => {
            setPlayer(prev => {
                let newX = prev.x;
                let newY = prev.y;
                let newVy = prev.vy;
                let onGround = prev.onGround;
                let jumpsLeft = prev.jumpsLeft;

                // Movement
                if (keys["ArrowLeft"] || keys["KeyA"]) newX -= MOVE_SPEED;
                if (keys["ArrowRight"] || keys["KeyD"]) newX += MOVE_SPEED;

                // Jump
                if ((keys["ArrowUp"] || keys["Space"] || keys["KeyW"]) && jumpsLeft > 0) {
                    if (prev.onGround || jumpsLeft === 2) {
                        newVy = JUMP_FORCE;
                        jumpsLeft -= 1;
                    } else if (jumpsLeft === 1) {
                        newVy = JUMP_FORCE;
                        jumpsLeft = 0;
                    }
                }

                // Gravity
                newVy += GRAVITY;
                newY += newVy;

                // Floor collision
                if (newY >= GAME_HEIGHT - GROUND_HEIGHT - 50) {
                    newY = GAME_HEIGHT - GROUND_HEIGHT - 50;
                    newVy = 0;
                    onGround = true;
                    jumpsLeft = 2;
                } else {
                    onGround = false;
                }

                // Obstacle collision
                obstacles.forEach(obs => {
                    if (
                        newX < obs.x + obs.width &&
                        newX + 40 > obs.x &&
                        newY < obs.y + obs.height &&
                        newY + 50 > obs.y
                    ) {
                        if (prev.x + 40 <= obs.x) newX = obs.x - 40; // hit left
                        else if (prev.x >= obs.x + obs.width) newX = obs.x + obs.width; // hit right
                        else if (prev.y + 50 <= obs.y) {
                            newY = obs.y - 50;
                            newVy = 0;
                            onGround = true;
                            jumpsLeft = 2;
                        } else if (prev.y >= obs.y + obs.height) {
                            newY = obs.y + obs.height;
                            newVy = 1;
                        }
                    }
                });

                // Boundaries
                if (newX < 0) newX = 0;
                if (newX > GAME_WIDTH - 40) newX = GAME_WIDTH - 40;

                // Coin collection
                if (
                    newX < coin.x + coin.size &&
                    newX + 40 > coin.x &&
                    newY < coin.y + coin.size &&
                    newY + 50 > coin.y
                ) {
                    setGameWon(true);
                }

                return { x: newX, y: newY, vy: newVy, onGround, jumpsLeft };
            });
        }, 20);
        return () => clearInterval(loop);
    }, [keys]);

    return (
        <div className="flex flex-col items-center mt-6">
            <h1 className="text-2xl font-bold mb-4">🏃 Platformer Game</h1>
            {gameWon && <p className="text-green-600 font-bold text-lg mb-2">🎉 You Win!</p>}
            <div
                style={{ width: GAME_WIDTH, height: GAME_HEIGHT }}
                className="relative border-4 border-gray-700 bg-sky-200 overflow-hidden"
            >
                {/* Ground */}
                <div
                    className="absolute bg-green-600"
                    style={{
                        bottom: 0,
                        left: 0,
                        width: GAME_WIDTH,
                        height: GROUND_HEIGHT,
                    }}
                />

                {/* Obstacles */}
                {obstacles.map((obs, i) => (
                    <div
                        key={i}
                        className="absolute bg-gray-800"
                        style={{
                            left: obs.x,
                            top: obs.y,
                            width: obs.width,
                            height: obs.height,
                        }}
                    />
                ))}

                {/* Coin */}
                <div
                    className="absolute bg-yellow-400 rounded-full"
                    style={{
                        left: coin.x,
                        top: coin.y,
                        width: coin.size,
                        height: coin.size,
                    }}
                />

                {/* Player */}
                <div
                    className="absolute bg-red-500 rounded"
                    style={{
                        left: player.x,
                        top: player.y,
                        width: 40,
                        height: 50,
                    }}
                />
            </div>
            <p className="mt-2 text-gray-700">Controls: Arrow keys or WASD — Jump with ↑ or Space</p>
        </div>
    );
}
