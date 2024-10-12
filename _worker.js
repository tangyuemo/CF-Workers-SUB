
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'auto'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//自建节点
const MainData = `
vmess://eyJhZGQiOiJjbG91ZGZsYXJlLjE4MjY4Mi54eXoiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiY2hyb21lIiwiaG9zdCI6InVzYS40ODQ2ODE5Mi54eXoiLCJpZCI6ImQ4OWQ1NTBiLTk0ZjYtNGFhMy1jNjc0LTU0MTVmMjBmMzZhMyIsIm5ldCI6IndzIiwicGF0aCI6Ii8yMDQ4IiwicG9ydCI6IjQ0MyIsInBzIjoi8J+HuvCfh7gg576O5Zu98J+HuvCfh7gxMSIsInNjeSI6ImF1dG8iLCJzbmkiOiJ1c2EuNDg0NjgxOTIueHl6IiwidGxzIjoidGxzIiwidHlwZSI6IiIsInYiOiIyIn0=
vmess://eyJhZGQiOiJzcGVlZC5tYXJpc2FsbmMuY29tIiwiYWlkIjoiMCIsImFscG4iOiIiLCJmcCI6ImNocm9tZSIsImhvc3QiOiJ1c2EuNDg0NjgxOTIueHl6IiwiaWQiOiJkODlkNTUwYi05NGY2LTRhYTMtYzY3NC01NDE1ZjIwZjM2YTMiLCJuZXQiOiJ3cyIsInBhdGgiOiIvMjA0OCIsInBvcnQiOiI0NDMiLCJwcyI6IvCfh7rwn4e4IOe+juWbvfCfh7rwn4e4MTEgMiIsInNjeSI6ImF1dG8iLCJzbmkiOiJ1c2EuNDg0NjgxOTIueHl6IiwidGxzIjoidGxzIiwidHlwZSI6IiIsInYiOiIyIn0=
vmess://eyJhZGQiOiJ3d3cuYmFvdGEubWUiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6InVzYS40ODQ2ODE5Mi54eXoiLCJpZCI6ImQ4OWQ1NTBiLTk0ZjYtNGFhMy1jNjc0LTU0MTVmMjBmMzZhMyIsIm5ldCI6IndzIiwicGF0aCI6Ii8yMDQ4IiwicG9ydCI6IjQ0MyIsInBzIjoi576O5Zu98J+HuvCfh7gxMSIsInNjeSI6ImF1dG8iLCJzbmkiOiJ1c2EuNDg0NjgxOTIueHl6IiwidGxzIjoidGxzIiwidHlwZSI6IiIsInYiOiIyIn0=
vmess://eyJhZGQiOiJjbG91ZGZsYXJlLjE4MjY4Mi54eXoiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiY2hyb21lIiwiaG9zdCI6ImRlLjQ4NDY4MTkyLnh5eiIsImlkIjoiYjljZDAxMTAtYTRkNC00MDBlLWY1YmQtNzliYjY1MzEyMjFjIiwibmV0Ijoid3MiLCJwYXRoIjoiLzIwNDgiLCJwb3J0IjoiNDQzIiwicHMiOiLwn4ep8J+HqiDlvrflm73wn4ep8J+HqiIsInNjeSI6ImF1dG8iLCJzbmkiOiJkZS40ODQ2ODE5Mi54eXoiLCJ0bHMiOiJ0bHMiLCJ0eXBlIjoiIiwidiI6IjIifQ==
vmess://eyJhZGQiOiJzcGVlZC5tYXJpc2FsbmMuY29tIiwiYWlkIjoiMCIsImFscG4iOiIiLCJmcCI6ImNocm9tZSIsImhvc3QiOiJkZS40ODQ2ODE5Mi54eXoiLCJpZCI6ImI5Y2QwMTEwLWE0ZDQtNDAwZS1mNWJkLTc5YmI2NTMxMjIxYyIsIm5ldCI6IndzIiwicGF0aCI6Ii8yMDQ4IiwicG9ydCI6IjQ0MyIsInBzIjoi8J+HqfCfh6og5b635Zu98J+HqfCfh6ogMiIsInNjeSI6ImF1dG8iLCJzbmkiOiJkZS40ODQ2ODE5Mi54eXoiLCJ0bHMiOiJ0bHMiLCJ0eXBlIjoiIiwidiI6IjIifQ==
vmess://eyJhZGQiOiJ3d3cuYmFvdGEubWUiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6ImRlLjQ4NDY4MTkyLnh5eiIsImlkIjoiYjljZDAxMTAtYTRkNC00MDBlLWY1YmQtNzliYjY1MzEyMjFjIiwibmV0Ijoid3MiLCJwYXRoIjoiLzIwNDgiLCJwb3J0IjoiNDQzIiwicHMiOiLlvrflm73wn4ep8J+HqiIsInNjeSI6ImF1dG8iLCJzbmkiOiJkZS40ODQ2ODE5Mi54eXoiLCJ0bHMiOiJ0bHMiLCJ0eXBlIjoiIiwidiI6IjIifQ==
vmess://eyJhZGQiOiJzcGVlZC5tYXJpc2FsbmMuY29tIiwiYWlkIjoiMCIsImFscG4iOiIiLCJmcCI6IiIsImhvc3QiOiJoay40ODQ2ODE5Mi54eXoiLCJpZCI6ImZlNjIzMDRhLTM0YTgtNGRlZC1mMzYzLThmNjAwNzIyMjM1NiIsIm5ldCI6IndzIiwicGF0aCI6Ii8yMDU5IiwicG9ydCI6IjIwNTIiLCJwcyI6Im5paWhvc3TpppnmuK/wn4et8J+HsCIsInNjeSI6ImF1dG8iLCJzbmkiOiIiLCJ0bHMiOiIiLCJ0eXBlIjoiIiwidiI6IjIifQ==
vmess://eyJhZGQiOiJjbG91ZGZsYXJlLjE4MjY4Mi54eXoiLCJhaWQiOiIwIiwiYWxwbiI6IiIsImZwIjoiIiwiaG9zdCI6ImhrLjQ4NDY4MTkyLnh5eiIsImlkIjoiZmU2MjMwNGEtMzRhOC00ZGVkLWYzNjMtOGY2MDA3MjIyMzU2IiwibmV0Ijoid3MiLCJwYXRoIjoiLzIwNTkiLCJwb3J0IjoiMjA1MiIsInBzIjoibmlpaG9zdOmmmea4r/Cfh63wn4ewIiwic2N5IjoiYXV0byIsInNuaSI6IiIsInRscyI6IiIsInR5cGUiOiIiLCJ2IjoiMiJ9
vless://33191cc1-b87c-4ed4-90c9-a46f0978d18e@visa.cn:443?path=%2F%3Fed%3D2560&security=tls&encryption=none&host=rumahdijual.eu.org&fp=randomized&type=ws&sni=rumahdijual.eu.org#rumahdijual.eu.org
vless://33191cc1-b87c-4ed4-90c9-a46f0978d18e@cfip.1323123.xyz:443?path=%2F%3Fed%3D2560&security=tls&encryption=none&host=rumahdijual.eu.org&fp=randomized&type=ws&sni=rumahdijual.eu.org#rumahdijual.eu.org
vless://33191cc1-b87c-4ed4-90c9-a46f0978d18e@ip.sb:443?path=%2F%3Fed%3D2560&security=tls&encryption=none&host=rumahdijual.eu.org&fp=randomized&type=ws&sni=rumahdijual.eu.org#rumahdijual.eu.org
vless://33191cc1-b87c-4ed4-90c9-a46f0978d18e@ct.anycast.nyc.mn:443?path=%2F%3Fed%3D2560&security=tls&encryption=none&host=rumahdijual.eu.org&fp=randomized&type=ws&sni=rumahdijual.eu.org#rumahdijual.eu.org`

//机场信息，可多个，也可为0
const urls = [
	'',
	'',
	// 添加更多订阅,支持base64
];

let subconverter = "api.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_Full.ini"; //订阅配置文件

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 

		if ( !(token == mytoken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage("#异常访问", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			return new Response('Hello World!', { status: 403 });
		} else if ( TG == 1 || !userAgent.includes('subconverter') ){
			await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		}

		if (userAgent.includes('clash')) {
			const subconverterUrl = `https://${subconverter}/sub?target=clash&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&new_name=true`;

			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				
				const subconverterContent = await subconverterResponse.text();
				
				return new Response(subconverterContent ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
					}
				});
			} catch (error) {
				return new Response(`Error: ${error.message}`, {
					status: 500,
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox')) {
			const subconverterUrl = `https://${subconverter}/sub?target=singbox&url=${encodeURIComponent(request.url)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=false&fdn=false&sort=false&new_name=true`;

			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				
				const subconverterContent = await subconverterResponse.text();
				
				return new Response(subconverterContent ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
					}
				});
			} catch (error) {
				return new Response(`Error: ${error.message}`, {
					status: 500,
					headers: { 'content-type': 'text/plain; charset=utf-8' },
				});
			}
		} else {
			let req_data = "";
			req_data += MainData;
			
			try {
				const responses = await Promise.all(urls.map(url => fetch(url,{
					method: 'get',
					headers: {
						'Accept': 'text/html,application/xhtml+xml,application/xml;',
						'User-Agent': 'CF-Workers-SUB/cmliu'
					}
				})));
					
				for (const response of responses) {
					if (response.ok) {
						const content = await response.text();
						req_data += atob(content) + '\n';
					}
				}
			} catch (error) {
	
			}
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);

			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);

			const base64Data = btoa(result);
			return new Response(base64Data ,{
				headers: { 
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		}
	}
};

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}
