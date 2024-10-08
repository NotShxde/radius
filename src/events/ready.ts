import { Client } from "discord.js"

export const run = async (client: Client) => {
    const Ready = [
        `--------------------------------------------------------`,
        `Ready since :  ${new Date().toUTCString()}`,
        `Bot         :  ${client.user!.username}`,
        `Members     :  ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
        `Servers     :  ${client.guilds.cache.size}`,
        `HAVE A GREAT DAY!!`,
        `--------------------------------------------------------`,
    ].join('\n');

    console.log(`[READY]${Ready}`);
    client.user?.setStatus('dnd');
    const changeStatus = () => {
        const status = [`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users`, ` ${client.guilds.cache.size.toLocaleString()} servers`, "Trignometry"];
        const random = status[Math.floor(Math.random() * status.length)];
        client.user!.setActivity(random, { type: 'WATCHING' });
    };

    setInterval(changeStatus,20000);
}