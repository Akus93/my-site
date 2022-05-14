export const schema = Object.freeze({
  '@context': 'http://schema.org/',
  '@type': 'Person',
  'name': 'Dawid Rdzanek',
  'additionalName': 'Jan',
  'image': 'https://dawidr.pl/assets/images/profile.jpg',
  'email': 'dawid.rdzanek@protonmail.com',
  'gender': 'male',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'PL',
    'addressLocality': 'Poznań',
    'postalCode': '61-058'
  },
  'nationality': 'Polish',
  'url': 'https://dawidr.pl',
  'sameAs': ['https://www.linkedin.com/in/dawidrdzanek', 'https://github.com/Akus93']
});
