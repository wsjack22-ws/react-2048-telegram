const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const BOT_TOKEN = '6878083338:AAHqNc31kz6TiYZFXcJOmksetwWIZdacvvU'

const bot = new Telegraf(BOT_TOKEN)

const web_link = "https://6589e032e2582c1efde19b8e--delightful-pie-0b4224.netlify.app/"

bot.start((ctx) => ctx.reply('Welcome', {
    reply_markup:{keyboard:[[{text:'Play', web_app: web_link}]]},
})
);

bot.launch()