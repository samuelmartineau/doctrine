module.exports = {
  tag: 'TEXTE_JURI_JUDI',
  keys: [{
      tag: 'META',
      keys: [{
        tag: 'META_COMMUN',
        keys: [{
          tag: 'ID',
        }, {
          tag: 'ANCIEN_ID',
        }, {
          tag: 'ORIGINE',
        }, {
          tag: 'URL',
        }, {
          tag: 'NATURE',
        }],
      }, {
        tag: 'META_SPEC',
        keys: [{
          tag: 'META_JURI',
          keys: [{
            tag: 'TITRE',
          }, {
            tag: 'DATE_DEC',
          }, {
            tag: 'JURIDICTION',
          }, {
            tag: 'NUMERO',
          }, {
            tag: 'SOLUTION',
          }],
        }, {
          tag: 'META_JURI_JUDI',
          keys: [{
            tag: 'NUMEROS_AFFAIRES',
            children: [{
              tag: 'NUMERO_AFFAIRE',
            }],
          }, {
            tag: 'FORMATION',
          }, {
            tag: 'FORM_DEC_ATT',
          }, {
            tag: 'DATE_DEC_ATT',
            formatter: (value) => value || null,
          }, {
            tag: 'SIEGE_APPEL',
          }, {
            tag: 'JURI_PREM',
          }, {
            tag: 'LIEU_PREM',
          }, {
            tag: 'DEMANDEUR',
          }, {
            tag: 'DEFENDEUR',
          }, {
            tag: 'PRESIDENT',
          }, {
            tag: 'AVOCAT_GL',
          }, {
            tag: 'AVOCATS',
          }, {
            tag: 'RAPPORTEUR',
          }],
        }],
      }],
    },
    {
      tag: 'TEXTE',
      keys: [{
        tag: 'BLOC_TEXTUEL',
        keys: [{
          tag: 'CONTENU',
          children: [],
        }],
      }, {
        tag: 'SOMMAIRE',
        children: [],
      }],
    },
    {
      tag: 'LIENS',
      children: [{
        tag: 'LIEN',
      }],
    },
  ],
};
