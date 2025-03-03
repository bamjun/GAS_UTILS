class DiscordNotifier {
  constructor(discordUrl = '') {
    this.discordUrl = discordUrl;
  }
  
  sendText(content_text = 'test text') {
    if (!this.discordUrl) {
      Logger.log('no webhook address');
      return '';
    }
    const payload = {
      content: content_text
    };
    const options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload)
    };
    UrlFetchApp.fetch(this.discordUrl, options);
  }
}

this.DiscordNotifier = DiscordNotifier;