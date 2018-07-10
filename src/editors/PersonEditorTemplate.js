import i18n from './i18n';

const editorDescription = {
  linkTitle: i18n.linkLabel,
  title: i18n.dialogTitle,
  tabs: [
    {
      label: i18n.tabGeneral,
      specials: [
        { type: 'LabelsAndDescriptionArea' },
      ],
      fieldsets: [
        {
          fields: [
            { property: 'P1559' } /* name in native language */,
            { property: 'P1477' } /* birth name */,
            { property: 'P742' } /* pseudonym */,
          ],
        },
        {
          fields: [
            { property: 'P53' } /* noble family */,
            { property: 'P97' } /* noble title */,
            { property: 'P511' } /* honorific prefix */,
          ],
        },
        {
          fields: [
            { property: 'P31' } /* instance of */,
            { property: 'P21' } /* sex or gender */,
            { property: 'P91' } /* sexual orientation */,
            { property: 'P27' } /* country of citizenship */,
            { property: 'P103' } /* native language */,
            { property: 'P1412' } /* languages spoken */,
            { property: 'P856' } /* official website */,
          ],
        },
      ],
    },
    {
      label: i18n.tabBirthAndDeath,
      fieldsets: [
        {
          fields: [
            { property: 'P569' } /* birth date */,
            { property: 'P19' } /* birth place */,
            { property: 'P172' } /* ethnic group */,
            { property: 'P103' } /* native language */,
          ],
        },
        {
          fields: [
            { property: 'P1321' } /* place of origin (Switzerland) */,
            { property: 'P66' } /* ancestral home */,
          ],
        },
        {
          fields: [
            { property: 'P570' } /* noble family */,
            { property: 'P20' } /* Death place */,
            { property: 'P509' } /* Death cause */,
            { property: 'P1196' } /* manner of death */,
            { property: 'P157' } /* killed by */,
            { property: 'P119' } /* place of burial */,
          ],
        },
        {
          fields: [
            { property: 'P535' } /* Find a Grave grave ID */,
          ],
        },
      ],
    },
    {
      label: i18n.tabMedia,
      fieldsets: [
        {
          fields: [
            { property: 'P18' } /* Image */,
            { property: 'P109' } /* signature */,
            { property: 'P990' } /* recording of the subject's voice */,
            { property: 'P1442' } /* grave picture */,
          ],
        },
        {
          labelEntityId: 'P237',
          fields: [
            { property: 'P94' } /* coat of arms image */,
            { property: 'P237' } /* coat of arms */,
          ],
        },
        {
          fields: [
            { property: 'P373' } /* Commons category */,
            { property: 'P1472' } /* Commons Creator page */,
          ],
        },
      ],
    },

    {
      labelEntityId: 'Q8436' /* family */,
      fields: [
        { property: 'P22' } /* father */,
        { property: 'P25' } /* mother */,
        { property: 'P1290' } /* godparent */,
        { property: 'P3373' } /* brother/sister */,
        { property: 'P26' } /* spouse */,
        { property: 'P451' } /* cohabitant */,
        { property: 'P1971' } /* number of children */,
        { property: 'P40' } /* child */,
        { property: 'P1038' } /* relative */,
      ],
    },

    {
      label: i18n.tabEducationAndScience,
      fieldsets: [
        {
          fields: [
            { property: 'P1066' } /* student of */,
            { property: 'P69' } /* alma mater */,
            { property: 'P184' } /* doctoral advisor */,
            { property: 'P1026' } /* doctoral thesis */,
            { property: 'P512' } /* academic degree */,
            { property: 'P802' } /* student */,
            { property: 'P185' } /* doctoral student */,
          ],
        },
        {
          fields: [
            { property: 'P549' } /* Mathematics Genealogy Project identifier */,
            { property: 'P496' } /* ORCID */,
            { property: 'P864' } /* ACM Digital Library author ID */,
            { property: 'P2456' } /* DBLP pID */,
            { property: 'P1556' } /* Zentralblatt MATH author ID */,
            { property: 'P1960' } /* Google Scholar ID */,
            { property: 'P1053' } /* ResearcherID */,
            { property: 'P1153' } /* Scopus Author ID */,
          ],
        },
        {
          fields: [
            { property: 'P428' } /* botanist author abbreviation */,
            { property: 'P835' } /* author citation (zoology) */,
          ],
        },
      ],
    },

    {
      labelEntityId: 'Q28640' /* profession */,
      fieldsets: [
        {
          fields: [
            { property: 'P106' } /* occupation */,
            { property: 'P101' } /* field of work */,
            { property: 'P108' } /* employer */,
            { property: 'P263' } /* official residence */,
          ],
        },
        {
          labelEntityId: 'P463',
          fields: [
            { property: 'P39' } /* position held */,
          ],
        },
        {
          labelEntityId: 'P463',
          fields: [
            { property: 'P463' } /* member of */,
          ],
        },
      ],
    },

    {
      labelEntityId: 'Q309' /* history */,
      fieldsets: [
        {
          labelEntityId: 'P793',
          fields: [
            { property: 'P793' } /* significant event */,
          ],
        },
        {
          labelEntityId: 'P1344',
          fields: [
            { property: 'P1344' } /* participant of */,
          ],
        },
      ],
    },

    {
      labelEntityId: 'Q8473' /* military */,
      fields: [
        { property: 'P241' } /* military branch */,
        { property: 'P410' } /* military rank */,
        { property: 'P598' } /* commands */,
        { property: 'P607' } /* conflict */,
      ],
    },

    {
      labelEntityId: 'Q20978643' /* point of view */,
      fieldsets: [
        {
          fields: [
            { property: 'P102' } /* member of political party */,
          ],
        },
        {
          fields: [
            { property: 'P140' } /* religion */,
            { property: 'P411' } /* canonization status */,
            { property: 'P841' } /* feast day */,
          ],
        },
      ],
    },

    {
      labelEntityId: 'Q349' /* sport */,
      fieldsets: [
        {
          fields: [
            { property: 'P2416' } /* sports discipline competed in */,
            { property: 'P54' } /* member of sports team */,
            { property: 'P413' } /* position played on team */,
            { property: 'P423' } /* shooting handedness */,
            { property: 'P741' } /* playing hand */,
            { property: 'P468' } /* dan/kyu rank */,
            { property: 'P2415' } /* personal best */,
          ],
        },
        {
          fields: [
            { property: 'P1447' } /* Sports Reference ID */,
          ],
        },
      ],
    },


    {
      labelEntityId: 'P1343',
      fields: [
        { property: 'P1343' } /* described by source */,
      ],
    },

    // {
    //   labelEntityId: 'Q1415395' /* film industry */,
    //   specials: [
    //     { type: 'SparqlPropertyGroup',
    //       sparql: 'SELECT ?property '
    //                 + 'WHERE { '
    //                 + '?property wdt:P31 wd:Q19595382 . '
    //                 + '?property wdt:P31 wd:Q22964274 . '
    //                 + '?property wikibase:propertyType wikibase:ExternalId . '
    //                 + '}' },
    //   ],
    // },
    // {
    //   labelEntityId: 'Q638' /* music */,
    //   specials: [
    //     { type: 'SparqlPropertyGroup',
    //       sparql: 'SELECT ?property '
    //                 + 'WHERE { '
    //                 + '?property wdt:P31 wd:Q19595382 . '
    //                 + '?property wdt:P31 wd:Q27525351 . '
    //                 + '?property wikibase:propertyType wikibase:ExternalId . '
    //                 + '}' },
    //   ],
    // },
    // {
    //   labelEntityId: 'Q6576792' /* online community */,
    //   specials: [
    //     { type: 'SparqlPropertyGroup',
    //       sparql: 'SELECT ?property '
    //                 + 'WHERE { '
    //                 + '?property wdt:P31 wd:Q19595382 . '
    //                 + '?property wdt:P31 wd:Q30041186 . '
    //                 + '?property wikibase:propertyType wikibase:ExternalId . '
    //                 + '}' },
    //   ],
    // },
    // {
    //   labelEntityId: 'Q349' /* sport */,
    //   specials: [
    //     { type: 'SparqlPropertyGroup',
    //       sparql: 'SELECT ?property '
    //                 + 'WHERE { '
    //                 + '?property wdt:P31 wd:Q19595382 . '
    //                 + '?property wdt:P31 wd:Q21818626 . '
    //                 + '?property wikibase:propertyType wikibase:ExternalId . '
    //                 + '}' },
    //   ],
    // },
    // {
    //   labelEntityId: 'Q36524' /* authority control */,
    //   specials: [
    //     { type: 'SparqlPropertyGroup',
    //       sparql: 'SELECT ?property '
    //                 + 'WHERE { '
    //                 + '?property wdt:P31 wd:Q19595382 . '
    //                 + 'MINUS {?property wdt:P31 wd:Q22964274} . '
    //                 + 'MINUS {?property wdt:P31 wd:Q27525351} . '
    //                 + 'MINUS {?property wdt:P31 wd:Q30041186} . '
    //                 + 'MINUS {?property wdt:P31 wd:Q21818626} . '
    //                 + '?property wikibase:propertyType wikibase:ExternalId . '
    //                 + '}' },
    //   ],
    // },
  ],
};

export default editorDescription;