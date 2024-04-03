import asyncio
import websockets

# Kullanıcı adlarını tutmak için bir sözlük oluşturulur
clients = {}

async def server(websocket, path):
    # Kullanıcı adını al
    username = await websocket.recv()
    clients[username] = websocket

    print(f"{username} katıldı")

    try:
        async for message in websocket:
            print(f"{username} tarafından gelen mesaj: {message}")
            # Alınan mesajı diğer kullanıcılara gönder
            for client in clients.values():
                if client != websocket:
                    await client.send(f"{username}: {message}")
    except websockets.ConnectionClosedError:
        del clients[username]
        print(f"{username} ayrıldı")

# WebSocket sunucusunu başlatma
start_server = websockets.serve(server, "localhost", 8765)

# Sunucuyu çalıştırma
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()


