const url = new URL(
  'https://x.com?first_name=john&last_name=doe&email=jdemail&phone=555',
)
const required = new Set(['email'])
console.log(url.searchParams.get('phone'))
