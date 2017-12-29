import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  jsonLD: SafeHtml;

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit() {
    const schema = {
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
        'postalCode': '61-892'
      },
      'nationality': 'Polish',
      'url': 'https://dawidr.pl',
      'sameAs' : [ 'https://www.linkedin.com/in/dawidrdzanek', 'https://github.com/Akus93', 'https://plus.google.com/+DawidRdzanek93' ]
    };
    const schemaJson = JSON.stringify(schema, null, 2);
    const schemaHtml = `<script type="application/ld+json">${schemaJson}</script>`;
    this.jsonLD = this.domSanitizer.bypassSecurityTrustHtml(schemaHtml);
  }

}
