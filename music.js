function Hi(){
    console.log("HI")
}
message.content = message.content.split('+')[1]
// Let's go with a few common example commands! Feel free to delete or change those.
if (!message.guild) return;

if (message.content === 'play') {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      connection.play('http://www.sample-videos.com/audio/mp3/wave.mp3')
    } else {
      message.reply('You need to join a voice channel first!');
    }

exports.Hi = Hi;