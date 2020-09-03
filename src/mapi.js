{
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "Sapiens Insurance APIs",
    "description": "Supported APIs for core systems integration"
  },
  "paths": {
    "/api/v1/contacts/{contactId}": {
      "get": {
        "tags": [
          "Contact"
        ],
        "parameters": [
          {
            "in": "path",
            "type": "string",
            "required": true,
            "name": "contactId"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "result": {
                      "type": "object",
                      "properties": {
                        "contact": {
                          "type": "object",
                          "properties": {
                            "firstName": {
                              "type": "string"
                            },
                            "lastName": {
                              "type": "string"
                            },
                            "title": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string"
                                },
                                "description": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "id",
                                "description"
                              ]
                            },
                            "gender": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string"
                                },
                                "description": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "id",
                                "description"
                              ]
                            },
                            "dateOfBirth": {
                              "type": "string"
                            },
                            "identifiers": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "type": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "id",
                                      "description"
                                    ]
                                  },
                                  "value": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "type",
                                  "value"
                                ]
                              }
                            },
                            "affinites": {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": "string"
                                    },
                                    "description": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "id",
                                    "description"
                                  ]
                                },
                                "membershipId": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "type",
                                "membershipId"
                              ]
                            },
                            "bankAccounts": {
                              "type": "object",
                              "properties": {
                                "country": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": "string"
                                    },
                                    "description": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "id",
                                    "description"
                                  ]
                                },
                                "bankAccountExternalNumber": {
                                  "type": "string"
                                },
                                "branchName": {
                                  "type": "string"
                                },
                                "accountNumberLastDigits": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "country",
                                "bankAccountExternalNumber",
                                "branchName",
                                "accountNumberLastDigits"
                              ]
                            },
                            "creditCards": {
                              "type": "object",
                              "properties": {
                                "country": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": "string"
                                    },
                                    "description": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "id",
                                    "description"
                                  ]
                                },
                                "cardNumberLastDigits": {
                                  "type": "string"
                                },
                                "validDate": {
                                  "type": "string"
                                },
                                "cvcCode": {
                                  "type": "string"
                                },
                                "holderName": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "country",
                                "cardNumberLastDigits",
                                "validDate",
                                "cvcCode",
                                "holderName"
                              ]
                            },
                            "addresses": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "city": {
                                    "type": "string"
                                  },
                                  "street": {
                                    "type": "string"
                                  },
                                  "house": {
                                    "type": "string"
                                  },
                                  "addressLine2": {
                                    "type": "string"
                                  },
                                  "country": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "id",
                                      "description"
                                    ]
                                  },
                                  "postalCode": {
                                    "type": "string"
                                  },
                                  "addressType": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "id",
                                      "description"
                                    ]
                                  }
                                },
                                "required": [
                                  "city",
                                  "street",
                                  "house",
                                  "addressLine2",
                                  "country",
                                  "postalCode",
                                  "addressType"
                                ]
                              }
                            },
                            "telephoneNumbers": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "telephoneNumber": {
                                    "type": "string"
                                  },
                                  "countryDialCode": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "id",
                                      "description"
                                    ]
                                  },
                                  "telephonePrefix": {
                                    "type": "string"
                                  },
                                  "telephoneType": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "id",
                                      "description"
                                    ]
                                  }
                                },
                                "required": [
                                  "telephoneNumber",
                                  "countryDialCode",
                                  "telephonePrefix",
                                  "telephoneType"
                                ]
                              }
                            },
                            "emails": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "email": {
                                    "type": "string"
                                  },
                                  "emailType": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "id",
                                      "description"
                                    ]
                                  }
                                },
                                "required": [
                                  "email",
                                  "emailType"
                                ]
                              }
                            },
                            "preferredContactMethod": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string"
                                },
                                "description": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "id",
                                "description"
                              ]
                            },
                            "preferredContactMethodDetails": {
                              "type": "object",
                              "properties": {
                                "country": {
                                  "type": "object"
                                },
                                "addressType": {
                                  "type": "object"
                                },
                                "countryDialCode": {
                                  "type": "object"
                                },
                                "telephoneType": {
                                  "type": "object"
                                },
                                "email": {
                                  "type": "string"
                                },
                                "emailType": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": "string"
                                    },
                                    "description": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "id",
                                    "description"
                                  ]
                                }
                              },
                              "required": [
                                "country",
                                "addressType",
                                "countryDialCode",
                                "telephoneType",
                                "email",
                                "emailType"
                              ]
                            }
                          },
                          "required": [
                            "firstName",
                            "lastName",
                            "title",
                            "gender",
                            "dateOfBirth",
                            "identifiers",
                            "affinites",
                            "bankAccounts",
                            "creditCards",
                            "addresses",
                            "telephoneNumbers",
                            "emails",
                            "preferredContactMethod",
                            "preferredContactMethodDetails"
                          ]
                        }
                      },
                      "required": [
                        "contact"
                      ]
                    }
                  },
                  "required": [
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {}
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/contacts": {
      "post": {
        "tags": [
          "Contact"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "parameter",
            "schema": {
              "type": "object",
              "properties": {
                "input": {
                  "type": "object",
                  "properties": {
                    "firstName": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string"
                    },
                    "dateOfBirth": {
                      "type": "string"
                    },
                    "titleId": {
                      "type": "string"
                    },
                    "genderId": {
                      "type": "string"
                    },
                    "identifiers": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    },
                    "affinityMemberships": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "affinityTypeId": {
                            "type": "string"
                          },
                          "membershipId": {
                            "type": "string"
                          },
                          "remarks": {
                            "type": "string"
                          }
                        },
                        "example": {
                          "affinityTypeId": "13027",
                          "membershipId": "33333333",
                          "remarks": "this is the best golf club"
                        },
                        "default": {
                          "affinityTypeId": "13027",
                          "membershipId": "33333333",
                          "remarks": "this is the best golf club"
                        }
                      }
                    },
                    "preferredContactMethod": {
                      "type": "object",
                      "properties": {
                        "methodId": {
                          "type": "string"
                        },
                        "deliveryDetails": {
                          "type": "object",
                          "properties": {
                            "emailTypeId": {
                              "type": "string"
                            },
                            "email": {
                              "type": "string"
                            }
                          },
                          "example": {
                            "emailTypeId": "2",
                            "email": "work@mail.com"
                          },
                          "default": {
                            "emailTypeId": "2",
                            "email": "work@mail.com"
                          }
                        }
                      },
                      "example": {
                        "methodId": "3",
                        "deliveryDetails": {
                          "emailTypeId": "2",
                          "email": "work@mail.com"
                        }
                      },
                      "default": {
                        "methodId": "3",
                        "deliveryDetails": {
                          "emailTypeId": "2",
                          "email": "work@mail.com"
                        }
                      }
                    },
                    "addresses": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    },
                    "emails": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "emailTypeId": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          }
                        },
                        "example": {
                          "emailTypeId": "1",
                          "email": "YorniMan@mail.com"
                        },
                        "default": {
                          "emailTypeId": "1",
                          "email": "YorniMan@mail.com"
                        }
                      }
                    },
                    "phoneNumbers": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    },
                    "bankAccounts": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "countryId": {
                            "type": "string"
                          },
                          "bankId": {
                            "type": "string"
                          },
                          "bankName": {
                            "type": "string"
                          },
                          "branchName": {
                            "type": "string"
                          },
                          "accountNumber": {
                            "type": "string"
                          },
                          "ibanCode": {
                            "type": "string"
                          },
                          "bicCode": {
                            "type": "string"
                          },
                          "swiftCode": {
                            "type": "string"
                          }
                        },
                        "example": {
                          "countryId": "153",
                          "bankId": "",
                          "bankName": "Diskunt",
                          "branchName": "123",
                          "accountNumber": "ab-123456",
                          "ibanCode": "NO6862638376794",
                          "bicCode": "87687",
                          "swiftCode": "hu-09870980"
                        },
                        "default": {
                          "countryId": "153",
                          "bankId": "",
                          "bankName": "Diskunt",
                          "branchName": "123",
                          "accountNumber": "ab-123456",
                          "ibanCode": "NO6862638376794",
                          "bicCode": "87687",
                          "swiftCode": "hu-09870980"
                        }
                      }
                    },
                    "creditCards": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "countryId": {
                            "type": "string"
                          },
                          "cardNumber": {
                            "type": "string"
                          },
                          "holderName": {
                            "type": "string"
                          },
                          "validDate": {
                            "type": "string"
                          },
                          "cvcCode": {
                            "type": "string"
                          },
                          "cardTypeId": {
                            "type": "string"
                          }
                        },
                        "example": {
                          "countryId": "194",
                          "cardNumber": "4336590349879905",
                          "holderName": "Brooklyn Baker",
                          "validDate": "2025-03-28T00:00:00",
                          "cvcCode": "114",
                          "cardTypeId": "28807"
                        },
                        "default": {
                          "countryId": "194",
                          "cardNumber": "4336590349879905",
                          "holderName": "Brooklyn Baker",
                          "validDate": "2025-03-28T00:00:00",
                          "cvcCode": "114",
                          "cardTypeId": "28807"
                        }
                      }
                    }
                  },
                  "example": {
                    "firstName": "Glen",
                    "name": "Morangi",
                    "dateOfBirth": "1982-04-05T00:00:00",
                    "titleId": "1",
                    "genderId": "2",
                    "identifiers": [
                      {
                        "identifierTypeId": "6",
                        "idValue": "1111111",
                        "countryId": "2"
                      },
                      {
                        "identifierTypeId": "1",
                        "idValue": "2222222",
                        "countryId": "2"
                      }
                    ],
                    "affinityMemberships": [
                      {
                        "affinityTypeId": "13027",
                        "membershipId": "33333333",
                        "remarks": "this is the best golf club"
                      }
                    ],
                    "preferredContactMethod": {
                      "methodId": "3",
                      "deliveryDetails": {
                        "emailTypeId": "2",
                        "email": "work@mail.com"
                      }
                    },
                    "addresses": [
                      {
                        "postalCode": "77777",
                        "countryId": "149",
                        "street": "Hertzel",
                        "city": "Tel Aviv",
                        "streetNumber": "223",
                        "addressLine2": "apt. 6B",
                        "addressTypeId": "2"
                      },
                      {
                        "postalCode": "55555",
                        "countryId": "151",
                        "street": "Harokmim",
                        "city": "Holon",
                        "streetNumber": "26",
                        "addressLine2": "apt. 6B",
                        "addressTypeId": "1"
                      }
                    ],
                    "emails": [
                      {
                        "emailTypeId": "1",
                        "email": "YorniMan@mail.com"
                      }
                    ],
                    "phoneNumbers": [
                      {
                        "telephoneNumber": "9042131",
                        "telephoneTypeId": "3",
                        "countryDialCodeId": "1",
                        "telephonePrefixId": "1",
                        "telephonePrefix": "02"
                      },
                      {
                        "telephoneNumber": "9319787",
                        "telephoneTypeId": "4",
                        "countryDialCodeId": "1",
                        "telephonePrefixId": "1",
                        "telephonePrefix": "02"
                      }
                    ],
                    "bankAccounts": [
                      {
                        "countryId": "153",
                        "bankId": "",
                        "bankName": "Diskunt",
                        "branchName": "123",
                        "accountNumber": "ab-123456",
                        "ibanCode": "NO6862638376794",
                        "bicCode": "87687",
                        "swiftCode": "hu-09870980"
                      }
                    ],
                    "creditCards": [
                      {
                        "countryId": "194",
                        "cardNumber": "4336590349879905",
                        "holderName": "Brooklyn Baker",
                        "validDate": "2025-03-28T00:00:00",
                        "cvcCode": "114",
                        "cardTypeId": "28807"
                      }
                    ]
                  },
                  "default": {
                    "firstName": "Glen",
                    "name": "Morangi",
                    "dateOfBirth": "1982-04-05T00:00:00",
                    "titleId": "1",
                    "genderId": "2",
                    "identifiers": [
                      {
                        "identifierTypeId": "6",
                        "idValue": "1111111",
                        "countryId": "2"
                      },
                      {
                        "identifierTypeId": "1",
                        "idValue": "2222222",
                        "countryId": "2"
                      }
                    ],
                    "affinityMemberships": [
                      {
                        "affinityTypeId": "13027",
                        "membershipId": "33333333",
                        "remarks": "this is the best golf club"
                      }
                    ],
                    "preferredContactMethod": {
                      "methodId": "3",
                      "deliveryDetails": {
                        "emailTypeId": "2",
                        "email": "work@mail.com"
                      }
                    },
                    "addresses": [
                      {
                        "postalCode": "77777",
                        "countryId": "149",
                        "street": "Hertzel",
                        "city": "Tel Aviv",
                        "streetNumber": "223",
                        "addressLine2": "apt. 6B",
                        "addressTypeId": "2"
                      },
                      {
                        "postalCode": "55555",
                        "countryId": "151",
                        "street": "Harokmim",
                        "city": "Holon",
                        "streetNumber": "26",
                        "addressLine2": "apt. 6B",
                        "addressTypeId": "1"
                      }
                    ],
                    "emails": [
                      {
                        "emailTypeId": "1",
                        "email": "YorniMan@mail.com"
                      }
                    ],
                    "phoneNumbers": [
                      {
                        "telephoneNumber": "9042131",
                        "telephoneTypeId": "3",
                        "countryDialCodeId": "1",
                        "telephonePrefixId": "1",
                        "telephonePrefix": "02"
                      },
                      {
                        "telephoneNumber": "9319787",
                        "telephoneTypeId": "4",
                        "countryDialCodeId": "1",
                        "telephonePrefixId": "1",
                        "telephonePrefix": "02"
                      }
                    ],
                    "bankAccounts": [
                      {
                        "countryId": "153",
                        "bankId": "",
                        "bankName": "Diskunt",
                        "branchName": "123",
                        "accountNumber": "ab-123456",
                        "ibanCode": "NO6862638376794",
                        "bicCode": "87687",
                        "swiftCode": "hu-09870980"
                      }
                    ],
                    "creditCards": [
                      {
                        "countryId": "194",
                        "cardNumber": "4336590349879905",
                        "holderName": "Brooklyn Baker",
                        "validDate": "2025-03-28T00:00:00",
                        "cvcCode": "114",
                        "cardTypeId": "28807"
                      }
                    ]
                  }
                }
              },
              "example": {
                "input": {
                  "firstName": "Glen",
                  "name": "Morangi",
                  "dateOfBirth": "1982-04-05T00:00:00",
                  "titleId": "1",
                  "genderId": "2",
                  "identifiers": [
                    {
                      "identifierTypeId": "6",
                      "idValue": "1111111",
                      "countryId": "2"
                    },
                    {
                      "identifierTypeId": "1",
                      "idValue": "2222222",
                      "countryId": "2"
                    }
                  ],
                  "affinityMemberships": [
                    {
                      "affinityTypeId": "13027",
                      "membershipId": "33333333",
                      "remarks": "this is the best golf club"
                    }
                  ],
                  "preferredContactMethod": {
                    "methodId": "3",
                    "deliveryDetails": {
                      "emailTypeId": "2",
                      "email": "work@mail.com"
                    }
                  },
                  "addresses": [
                    {
                      "postalCode": "77777",
                      "countryId": "149",
                      "street": "Hertzel",
                      "city": "Tel Aviv",
                      "streetNumber": "223",
                      "addressLine2": "apt. 6B",
                      "addressTypeId": "2"
                    },
                    {
                      "postalCode": "55555",
                      "countryId": "151",
                      "street": "Harokmim",
                      "city": "Holon",
                      "streetNumber": "26",
                      "addressLine2": "apt. 6B",
                      "addressTypeId": "1"
                    }
                  ],
                  "emails": [
                    {
                      "emailTypeId": "1",
                      "email": "YorniMan@mail.com"
                    }
                  ],
                  "phoneNumbers": [
                    {
                      "telephoneNumber": "9042131",
                      "telephoneTypeId": "3",
                      "countryDialCodeId": "1",
                      "telephonePrefixId": "1",
                      "telephonePrefix": "02"
                    },
                    {
                      "telephoneNumber": "9319787",
                      "telephoneTypeId": "4",
                      "countryDialCodeId": "1",
                      "telephonePrefixId": "1",
                      "telephonePrefix": "02"
                    }
                  ],
                  "bankAccounts": [
                    {
                      "countryId": "153",
                      "bankId": "",
                      "bankName": "Diskunt",
                      "branchName": "123",
                      "accountNumber": "ab-123456",
                      "ibanCode": "NO6862638376794",
                      "bicCode": "87687",
                      "swiftCode": "hu-09870980"
                    }
                  ],
                  "creditCards": [
                    {
                      "countryId": "194",
                      "cardNumber": "4336590349879905",
                      "holderName": "Brooklyn Baker",
                      "validDate": "2025-03-28T00:00:00",
                      "cvcCode": "114",
                      "cardTypeId": "28807"
                    }
                  ]
                }
              },
              "default": {
                "input": {
                  "firstName": "Glen",
                  "name": "Morangi",
                  "dateOfBirth": "1982-04-05T00:00:00",
                  "titleId": "1",
                  "genderId": "2",
                  "identifiers": [
                    {
                      "identifierTypeId": "6",
                      "idValue": "1111111",
                      "countryId": "2"
                    },
                    {
                      "identifierTypeId": "1",
                      "idValue": "2222222",
                      "countryId": "2"
                    }
                  ],
                  "affinityMemberships": [
                    {
                      "affinityTypeId": "13027",
                      "membershipId": "33333333",
                      "remarks": "this is the best golf club"
                    }
                  ],
                  "preferredContactMethod": {
                    "methodId": "3",
                    "deliveryDetails": {
                      "emailTypeId": "2",
                      "email": "work@mail.com"
                    }
                  },
                  "addresses": [
                    {
                      "postalCode": "77777",
                      "countryId": "149",
                      "street": "Hertzel",
                      "city": "Tel Aviv",
                      "streetNumber": "223",
                      "addressLine2": "apt. 6B",
                      "addressTypeId": "2"
                    },
                    {
                      "postalCode": "55555",
                      "countryId": "151",
                      "street": "Harokmim",
                      "city": "Holon",
                      "streetNumber": "26",
                      "addressLine2": "apt. 6B",
                      "addressTypeId": "1"
                    }
                  ],
                  "emails": [
                    {
                      "emailTypeId": "1",
                      "email": "YorniMan@mail.com"
                    }
                  ],
                  "phoneNumbers": [
                    {
                      "telephoneNumber": "9042131",
                      "telephoneTypeId": "3",
                      "countryDialCodeId": "1",
                      "telephonePrefixId": "1",
                      "telephonePrefix": "02"
                    },
                    {
                      "telephoneNumber": "9319787",
                      "telephoneTypeId": "4",
                      "countryDialCodeId": "1",
                      "telephonePrefixId": "1",
                      "telephonePrefix": "02"
                    }
                  ],
                  "bankAccounts": [
                    {
                      "countryId": "153",
                      "bankId": "",
                      "bankName": "Diskunt",
                      "branchName": "123",
                      "accountNumber": "ab-123456",
                      "ibanCode": "NO6862638376794",
                      "bicCode": "87687",
                      "swiftCode": "hu-09870980"
                    }
                  ],
                  "creditCards": [
                    {
                      "countryId": "194",
                      "cardNumber": "4336590349879905",
                      "holderName": "Brooklyn Baker",
                      "validDate": "2025-03-28T00:00:00",
                      "cvcCode": "114",
                      "cardTypeId": "28807"
                    }
                  ]
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "result": {
                      "type": "object",
                      "properties": {
                        "contactId": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "contactId"
                      ]
                    }
                  },
                  "required": [
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {}
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      },
      "put": {
        "tags": [
          "Contact"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "parameter",
            "schema": {
              "type": "object",
              "properties": {
                "input": {
                  "type": "object",
                  "properties": {
                    "contactId": {
                      "type": "string"
                    },
                    "firstName": {
                      "type": "string"
                    }
                  },
                  "example": {
                    "contactId": "404619",
                    "firstName": "Samantha"
                  },
                  "default": {
                    "contactId": "404619",
                    "firstName": "Samantha"
                  }
                }
              },
              "example": {
                "input": {
                  "contactId": "404619",
                  "firstName": "Samantha"
                }
              },
              "default": {
                "input": {
                  "contactId": "404619",
                  "firstName": "Samantha"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "result": {
                      "type": "object",
                      "properties": {
                        "contactId": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "contactId"
                      ]
                    }
                  },
                  "required": [
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {}
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/search/claims": {
      "post": {
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "parameter",
            "schema": {
              "type": "object",
              "properties": {
                "owner": {
                  "type": "string"
                },
                "fromDate": {
                  "type": "string"
                },
                "toDate": {
                  "type": "string"
                },
                "payer": {
                  "type": "string"
                },
                "limit": {
                  "type": "string"
                },
                "offset": {
                  "type": "string"
                },
                "sortBy": {
                  "type": "string"
                },
                "role": {
                  "type": "string"
                }
              },
              "example": {
                "owner": "28898",
                "fromDate": "",
                "toDate": "",
                "payer": "",
                "limit": "",
                "offset": "",
                "sortBy": "",
                "role": ""
              },
              "default": {
                "owner": "28898",
                "fromDate": "",
                "toDate": "",
                "payer": "",
                "limit": "",
                "offset": "",
                "sortBy": "",
                "role": ""
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "owner": {
                      "type": "string"
                    },
                    "fromDate": {
                      "type": "string"
                    },
                    "toDate": {
                      "type": "string"
                    },
                    "payer": {
                      "type": "string"
                    },
                    "limit": {
                      "type": "string"
                    },
                    "offset": {
                      "type": "string"
                    },
                    "sortBy": {
                      "type": "string"
                    },
                    "role": {
                      "type": "integer"
                    },
                    "result": {
                      "type": "object",
                      "properties": {
                        "listClaims": {
                          "type": "object",
                          "properties": {
                            "claims": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "policyNumber": {
                                    "type": "string"
                                  },
                                  "claimEventDate": {
                                    "type": "string"
                                  },
                                  "claimCause": {
                                    "type": "string"
                                  },
                                  "status": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "id",
                                      "description"
                                    ]
                                  },
                                  "lastInteractionDate": {
                                    "type": "string"
                                  },
                                  "nextAction": {
                                    "type": "string"
                                  },
                                  "claimNumber": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "policyNumber",
                                  "claimEventDate",
                                  "claimCause",
                                  "status",
                                  "lastInteractionDate",
                                  "nextAction",
                                  "claimNumber"
                                ]
                              }
                            }
                          },
                          "required": [
                            "claims"
                          ]
                        }
                      },
                      "required": [
                        "listClaims"
                      ]
                    }
                  },
                  "required": [
                    "owner",
                    "fromDate",
                    "toDate",
                    "payer",
                    "limit",
                    "offset",
                    "sortBy",
                    "role",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/search/policies": {
      "post": {
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "parameter",
            "schema": {
              "type": "object",
              "properties": {
                "owner": {
                  "type": "string"
                },
                "fromDate": {
                  "type": "string"
                },
                "toDate": {
                  "type": "string"
                },
                "payer": {
                  "type": "string"
                },
                "limit": {
                  "type": "string"
                },
                "offset": {
                  "type": "string"
                },
                "sortBy": {
                  "type": "string"
                },
                "role": {
                  "type": "string"
                }
              },
              "example": {
                "owner": "28898",
                "fromDate": "",
                "toDate": "",
                "payer": "",
                "limit": "",
                "offset": "",
                "sortBy": "",
                "role": ""
              },
              "default": {
                "owner": "28898",
                "fromDate": "",
                "toDate": "",
                "payer": "",
                "limit": "",
                "offset": "",
                "sortBy": "",
                "role": ""
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "owner": {
                      "type": "string"
                    },
                    "fromDate": {
                      "type": "string"
                    },
                    "toDate": {
                      "type": "string"
                    },
                    "payer": {
                      "type": "string"
                    },
                    "limit": {
                      "type": "string"
                    },
                    "offset": {
                      "type": "string"
                    },
                    "sortBy": {
                      "type": "string"
                    },
                    "role": {
                      "type": "integer"
                    },
                    "result": {
                      "type": "object",
                      "properties": {
                        "listPolicies": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "product": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string"
                                  },
                                  "description": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "id",
                                  "description"
                                ]
                              },
                              "policyNumber": {
                                "type": "string"
                              },
                              "effectiveDate": {
                                "type": "string"
                              },
                              "endDate": {
                                "type": "string"
                              },
                              "policyHolderName": {
                                "type": "string"
                              },
                              "status": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string"
                                  },
                                  "description": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "id",
                                  "description"
                                ]
                              }
                            },
                            "required": [
                              "product",
                              "policyNumber",
                              "effectiveDate",
                              "endDate",
                              "policyHolderName",
                              "status"
                            ]
                          }
                        }
                      },
                      "required": [
                        "listPolicies"
                      ]
                    }
                  },
                  "required": [
                    "owner",
                    "fromDate",
                    "toDate",
                    "payer",
                    "limit",
                    "offset",
                    "sortBy",
                    "role",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/search/quotes": {
      "post": {
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "parameter",
            "schema": {
              "type": "object",
              "properties": {
                "owner": {
                  "type": "string"
                },
                "fromDate": {
                  "type": "string"
                },
                "toDate": {
                  "type": "string"
                },
                "payer": {
                  "type": "string"
                },
                "limit": {
                  "type": "string"
                },
                "offset": {
                  "type": "string"
                },
                "sortBy": {
                  "type": "string"
                },
                "role": {
                  "type": "string"
                }
              },
              "example": {
                "owner": "28898",
                "fromDate": "",
                "toDate": "",
                "payer": "",
                "limit": "",
                "offset": "",
                "sortBy": "",
                "role": ""
              },
              "default": {
                "owner": "28898",
                "fromDate": "",
                "toDate": "",
                "payer": "",
                "limit": "",
                "offset": "",
                "sortBy": "",
                "role": ""
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "owner": {
                      "type": "string"
                    },
                    "fromDate": {
                      "type": "string"
                    },
                    "toDate": {
                      "type": "string"
                    },
                    "payer": {
                      "type": "string"
                    },
                    "limit": {
                      "type": "string"
                    },
                    "offset": {
                      "type": "string"
                    },
                    "sortBy": {
                      "type": "string"
                    },
                    "role": {
                      "type": "integer"
                    },
                    "result": {
                      "type": "object",
                      "properties": {
                        "listQuotes": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "product": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string"
                                  },
                                  "description": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "id",
                                  "description"
                                ]
                              },
                              "effectiveDate": {
                                "type": "string"
                              },
                              "endDate": {
                                "type": "string"
                              },
                              "policyHolderName": {
                                "type": "string"
                              },
                              "quoteValidityDate": {
                                "type": "string"
                              },
                              "status": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string"
                                  },
                                  "description": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "id",
                                  "description"
                                ]
                              }
                            },
                            "required": [
                              "product",
                              "effectiveDate",
                              "endDate",
                              "policyHolderName",
                              "quoteValidityDate",
                              "status"
                            ]
                          }
                        }
                      },
                      "required": [
                        "listQuotes"
                      ]
                    }
                  },
                  "required": [
                    "owner",
                    "fromDate",
                    "toDate",
                    "payer",
                    "limit",
                    "offset",
                    "sortBy",
                    "role",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/claims/{claimId}": {
      "get": {
        "tags": [
          "Claim"
        ],
        "parameters": [
          {
            "in": "path",
            "name": "claimId",
            "type": "string",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "claimId": {
                      "type": "string"
                    },
                    "result": {
                      "type": "object",
                      "properties": {
                        "claimsOverview": {
                          "type": "object",
                          "properties": {
                            "eventDate": {
                              "type": "string"
                            },
                            "policyNumber": {
                              "type": "string"
                            },
                            "claimCause": {
                              "type": "string"
                            },
                            "claimStatus": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string"
                                },
                                "description": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "id",
                                "description"
                              ]
                            },
                            "serviceProviersInvolved": {
                              "type": "array",
                              "items": {
                                "type": "string"
                              }
                            }
                          },
                          "required": [
                            "eventDate",
                            "policyNumber",
                            "claimCause",
                            "claimStatus",
                            "serviceProviersInvolved"
                          ]
                        }
                      },
                      "required": [
                        "claimsOverview"
                      ]
                    }
                  },
                  "required": [
                    "claimId",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {}
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/claims": {
      "post": {
        "tags": [
          "Claim"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "parameter",
            "schema": {
              "type": "object",
              "properties": {
                "fromDate": {
                  "type": "string"
                },
                "toDate": {
                  "type": "string"
                },
                "status": {
                  "type": "string"
                },
                "sortBy": {
                  "type": "string"
                },
                "offset": {
                  "type": "number"
                },
                "limit": {
                  "type": "number"
                }
              },
              "example": {
                "fromDate": "2019-04-28",
                "toDate": null,
                "status": null,
                "sortBy": null,
                "offset": null,
                "limit": null
              },
              "default": {
                "fromDate": "2019-04-28",
                "toDate": null,
                "status": null,
                "sortBy": null,
                "offset": null,
                "limit": null
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "fromDate": {
                      "type": "string"
                    },
                    "toDate": {
                      "type": "string"
                    },
                    "status": {
                      "type": "string"
                    },
                    "sortBy": {
                      "type": "string"
                    },
                    "offset": {
                      "type": "number"
                    },
                    "limit": {
                      "type": "number"
                    },
                    "result": {
                      "type": "object",
                      "properties": {
                        "listClaims": {
                          "type": "object",
                          "properties": {
                            "claims": {
                              "type": "array",
                              "items": {
                                "type": "object",
                                "properties": {
                                  "policyNumber": {
                                    "type": "string"
                                  },
                                  "claimEventDate": {
                                    "type": "string"
                                  },
                                  "claimCause": {
                                    "type": "string"
                                  },
                                  "status": {
                                    "type": "object",
                                    "properties": {
                                      "id": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": "string"
                                      }
                                    },
                                    "required": [
                                      "id",
                                      "description"
                                    ]
                                  },
                                  "lastInteractionDate": {
                                    "type": "string"
                                  },
                                  "nextAction": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "policyNumber",
                                  "claimEventDate",
                                  "claimCause",
                                  "status",
                                  "lastInteractionDate",
                                  "nextAction"
                                ]
                              }
                            }
                          },
                          "required": [
                            "claims"
                          ]
                        }
                      },
                      "required": [
                        "listClaims"
                      ]
                    }
                  },
                  "required": [
                    "fromDate",
                    "toDate",
                    "status",
                    "sortBy",
                    "offset",
                    "limit",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {}
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/policies/{policyExtNo}": {
      "get": {
        "tags": [
          "Policy"
        ],
        "parameters": [
          {
            "in": "path",
            "required": true,
            "type": "string",
            "name": "policyExtNo"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "policyExtNo": {
                      "type": "string"
                    },
                    "result": {
                      "type": "object",
                      "properties": {
                        "currency": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "string"
                            },
                            "description": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "id",
                            "description"
                          ]
                        },
                        "startDate": {
                          "type": "string"
                        },
                        "endDate": {
                          "type": "string"
                        },
                        "paymentMethod": {
                          "type": "string"
                        },
                        "paymentFrequency": {
                          "type": "string"
                        },
                        "totalPremium": {
                          "type": "integer"
                        },
                        "product": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "string"
                            },
                            "description": {
                              "type": "string"
                            },
                            "lineOfBussness": {
                              "type": "object",
                              "properties": {
                                "id": {
                                  "type": "string"
                                },
                                "description": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "id",
                                "description"
                              ]
                            }
                          },
                          "required": [
                            "id",
                            "description",
                            "lineOfBussness"
                          ]
                        },
                        "status": {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": "string"
                            },
                            "description": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "id",
                            "description"
                          ]
                        },
                        "covers": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "premium": {
                                "type": "integer"
                              },
                              "insuranceAmount": {
                                "type": "integer"
                              },
                              "status": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string"
                                  },
                                  "description": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "id",
                                  "description"
                                ]
                              },
                              "coverType": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string"
                                  },
                                  "description": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "id",
                                  "description"
                                ]
                              }
                            },
                            "required": [
                              "premium",
                              "insuranceAmount",
                              "status",
                              "coverType"
                            ]
                          }
                        },
                        "contacts": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "string"
                              },
                              "role": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string"
                                  },
                                  "description": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "id",
                                  "description"
                                ]
                              }
                            },
                            "required": [
                              "id",
                              "role"
                            ]
                          }
                        },
                        "insuredObjects": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "string"
                            },
                            "description": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "type",
                            "description"
                          ]
                        }
                      },
                      "required": [
                        "currency",
                        "startDate",
                        "endDate",
                        "paymentMethod",
                        "paymentFrequency",
                        "totalPremium",
                        "product",
                        "status",
                        "covers",
                        "contacts",
                        "insuredObjects"
                      ]
                    }
                  },
                  "required": [
                    "policyExtNo",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/policies": {
      "post": {
        "tags": [
          "Policy"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "parameter",
            "schema": {
              "type": "object",
              "properties": {
                "carMetadata": {
                  "type": "object",
                  "properties": {
                    "manufacture": {
                      "type": "string"
                    },
                    "value": {
                      "type": "string"
                    }
                  },
                  "example": {
                    "manufacture": "167",
                    "value": "40000"
                  },
                  "default": {
                    "manufacture": "167",
                    "value": "40000"
                  }
                },
                "identifier": {
                  "type": "string"
                },
                "identifierRole": {
                  "type": "integer"
                },
                "toDate": {
                  "type": "string"
                },
                "renewDate": {
                  "type": "string"
                },
                "fromDate": {
                  "type": "string"
                },
                "id": {
                  "type": "string"
                },
                "paymentFrequency": {
                  "type": "string"
                },
                "paymentMethod": {
                  "type": "string"
                },
                "policyStatus": {
                  "type": "integer"
                },
                "productType": {
                  "type": "integer"
                },
                "classNameIDIT": {
                  "type": "string"
                },
                "planCards": {
                  "type": "object",
                  "properties": {
                    "covers": {
                      "type": "array",
                      "items": {
                        "type": "object"
                      }
                    }
                  },
                  "example": {
                    "covers": [
                      {
                        "cover": "TPL",
                        "premium": "145.00",
                        "key": "5000580",
                        "relevant": true
                      },
                      {
                        "cover": "Driver",
                        "premium": 0,
                        "key": "5000583",
                        "relevant": true
                      },
                      {
                        "cover": "Policy costs",
                        "premium": 0,
                        "key": "5000579",
                        "relevant": false
                      }
                    ]
                  },
                  "default": {
                    "covers": [
                      {
                        "cover": "TPL",
                        "premium": "145.00",
                        "key": "5000580",
                        "relevant": true
                      },
                      {
                        "cover": "Driver",
                        "premium": 0,
                        "key": "5000583",
                        "relevant": true
                      },
                      {
                        "cover": "Policy costs",
                        "premium": 0,
                        "key": "5000579",
                        "relevant": false
                      }
                    ]
                  }
                }
              },
              "example": {
                "carMetadata": {
                  "manufacture": "167",
                  "value": "40000"
                },
                "identifier": "29424",
                "identifierRole": 6,
                "toDate": "2020-05-12",
                "renewDate": "2020-05-13",
                "fromDate": "2019-05-13",
                "id": "5000050",
                "paymentFrequency": "10019",
                "paymentMethod": "4",
                "policyStatus": 10,
                "productType": 4,
                "classNameIDIT": "interfaces:VehicleIVO",
                "planCards": {
                  "covers": [
                    {
                      "cover": "TPL",
                      "premium": "145.00",
                      "key": "5000580",
                      "relevant": true
                    },
                    {
                      "cover": "Driver",
                      "premium": 0,
                      "key": "5000583",
                      "relevant": true
                    },
                    {
                      "cover": "Policy costs",
                      "premium": 0,
                      "key": "5000579",
                      "relevant": false
                    }
                  ]
                }
              },
              "default": {
                "carMetadata": {
                  "manufacture": "167",
                  "value": "40000"
                },
                "identifier": "29424",
                "identifierRole": 6,
                "toDate": "2020-05-12",
                "renewDate": "2020-05-13",
                "fromDate": "2019-05-13",
                "id": "5000050",
                "paymentFrequency": "10019",
                "paymentMethod": "4",
                "policyStatus": 10,
                "productType": 4,
                "classNameIDIT": "interfaces:VehicleIVO",
                "planCards": {
                  "covers": [
                    {
                      "cover": "TPL",
                      "premium": "145.00",
                      "key": "5000580",
                      "relevant": true
                    },
                    {
                      "cover": "Driver",
                      "premium": 0,
                      "key": "5000583",
                      "relevant": true
                    },
                    {
                      "cover": "Policy costs",
                      "premium": 0,
                      "key": "5000579",
                      "relevant": false
                    }
                  ]
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "carMetadata": {
                      "type": "object",
                      "properties": {
                        "manufacture": {
                          "type": "string"
                        },
                        "value": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "manufacture",
                        "value"
                      ]
                    },
                    "identifier": {
                      "type": "string"
                    },
                    "identifierRole": {
                      "type": "integer"
                    },
                    "toDate": {
                      "type": "string"
                    },
                    "renewDate": {
                      "type": "string"
                    },
                    "fromDate": {
                      "type": "string"
                    },
                    "id": {
                      "type": "string"
                    },
                    "paymentFrequency": {
                      "type": "string"
                    },
                    "paymentMethod": {
                      "type": "string"
                    },
                    "policyStatus": {
                      "type": "integer"
                    },
                    "productType": {
                      "type": "integer"
                    },
                    "classNameIDIT": {
                      "type": "string"
                    },
                    "planCards": {
                      "type": "object",
                      "properties": {
                        "covers": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "cover": {
                                "type": "string"
                              },
                              "premium": {
                                "type": "string"
                              },
                              "key": {
                                "type": "string"
                              },
                              "relevant": {
                                "type": "boolean"
                              }
                            },
                            "required": [
                              "cover",
                              "premium",
                              "key",
                              "relevant"
                            ]
                          }
                        }
                      },
                      "required": [
                        "covers"
                      ]
                    },
                    "result": {
                      "type": "object",
                      "properties": {
                        "createdProposal": {
                          "type": "object",
                          "properties": {
                            "extendedIDWrapperIVO": {
                              "type": "object",
                              "properties": {
                                "attributes": {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": "string"
                                    },
                                    "main": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "id",
                                    "main"
                                  ]
                                },
                                "identifier": {
                                  "type": "string"
                                },
                                "externalID": {
                                  "type": "string"
                                },
                                "statusIVO": {
                                  "type": "object",
                                  "properties": {
                                    "attributes": {
                                      "type": "object",
                                      "properties": {
                                        "id": {
                                          "type": "string"
                                        }
                                      },
                                      "required": [
                                        "id"
                                      ]
                                    },
                                    "statusId": {
                                      "type": "string"
                                    },
                                    "statusEntityNr": {
                                      "type": "string"
                                    },
                                    "status": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "attributes",
                                    "statusId",
                                    "statusEntityNr",
                                    "status"
                                  ]
                                }
                              },
                              "required": [
                                "attributes",
                                "identifier",
                                "externalID",
                                "statusIVO"
                              ]
                            }
                          },
                          "required": [
                            "extendedIDWrapperIVO"
                          ]
                        }
                      },
                      "required": [
                        "createdProposal"
                      ]
                    }
                  },
                  "required": [
                    "carMetadata",
                    "identifier",
                    "identifierRole",
                    "toDate",
                    "renewDate",
                    "fromDate",
                    "id",
                    "paymentFrequency",
                    "paymentMethod",
                    "policyStatus",
                    "productType",
                    "classNameIDIT",
                    "planCards",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {}
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/claims/{claimId}/documents": {
      "get": {
        "tags": [
          "Claim"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "entityType",
            "type": "string"
          },
          {
            "in": "path",
            "type": "string",
            "required": true,
            "name": "claimId"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "entityType": {
                      "type": "string"
                    },
                    "claimId": {
                      "type": "string"
                    },
                    "result": {
                      "type": "object",
                      "properties": {
                        "listDocuments": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "documentName": {
                                "type": "string"
                              },
                              "documentType": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string"
                                  },
                                  "description": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "id",
                                  "description"
                                ]
                              },
                              "documentReceiptDate": {
                                "type": "string"
                              },
                              "documentURL": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "documentName",
                              "documentType",
                              "documentReceiptDate",
                              "documentURL"
                            ]
                          }
                        }
                      },
                      "required": [
                        "listDocuments"
                      ]
                    }
                  },
                  "required": [
                    "entityType",
                    "claimId",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {}
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/contacts/{contactId}/documents": {
      "get": {
        "tags": [
          "Contact"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "entityType",
            "type": "string"
          },
          {
            "in": "path",
            "required": true,
            "type": "string",
            "name": "contactId"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "entityType": {
                      "type": "string"
                    },
                    "contactId": {
                      "type": "string"
                    },
                    "result": {
                      "type": "object",
                      "properties": {
                        "listDocuments": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "documentName": {
                                "type": "string"
                              },
                              "documentType": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string"
                                  },
                                  "description": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "id",
                                  "description"
                                ]
                              },
                              "documentReceiptDate": {
                                "type": "string"
                              },
                              "documentURL": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "documentName",
                              "documentType",
                              "documentReceiptDate",
                              "documentURL"
                            ]
                          }
                        }
                      },
                      "required": [
                        "listDocuments"
                      ]
                    }
                  },
                  "required": [
                    "entityType",
                    "contactId",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {}
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/policies/{policyId}/documents": {
      "get": {
        "tags": [
          "Policy"
        ],
        "parameters": [
          {
            "in": "query",
            "type": "string",
            "name": "entityType"
          },
          {
            "in": "path",
            "required": true,
            "type": "string",
            "name": "policyId"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "entityType": {
                      "type": "string"
                    },
                    "policyId": {
                      "type": "string"
                    },
                    "result": {
                      "type": "object",
                      "properties": {
                        "listDocuments": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "documentName": {
                                "type": "string"
                              },
                              "documentType": {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": "string"
                                  },
                                  "description": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "id",
                                  "description"
                                ]
                              },
                              "documentReceiptDate": {
                                "type": "string"
                              },
                              "documentURL": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "documentName",
                              "documentType",
                              "documentReceiptDate",
                              "documentURL"
                            ]
                          }
                        }
                      },
                      "required": [
                        "listDocuments"
                      ]
                    }
                  },
                  "required": [
                    "entityType",
                    "policyId",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {}
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/presentation": {
      "get": {
        "tags": [
          "Misc"
        ],
        "parameters": [
          {
            "in": "query",
            "type": "string",
            "name": "id"
          },
          {
            "in": "query",
            "type": "string",
            "name": "country"
          },
          {
            "in": "query",
            "type": "string",
            "name": "lang"
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "id": {
                      "type": "string"
                    },
                    "country": {
                      "type": "string"
                    },
                    "lang": {
                      "type": "string"
                    },
                    "result": {
                      "type": "object",
                      "properties": {
                        "presentation": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "id": {
                                "type": "string"
                              },
                              "description": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "id",
                              "description"
                            ]
                          }
                        }
                      },
                      "required": [
                        "presentation"
                      ]
                    }
                  },
                  "required": [
                    "id",
                    "country",
                    "lang",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {}
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    },
    "/api/v1/payments": {
      "patch": {
        "tags": [
          "Payment"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "parameter",
            "schema": {
              "type": "object",
              "properties": {
                "input": {
                  "type": "object",
                  "properties": {
                    "policyId": {
                      "type": "string"
                    },
                    "collectionMethodId": {
                      "type": "string"
                    },
                    "frequencyId": {
                      "type": "string"
                    },
                    "bankAccountExternalNumber": {
                      "type": "string"
                    }
                  },
                  "example": {
                    "policyId": "400934",
                    "collectionMethodId": "2",
                    "frequencyId": "6",
                    "bankAccountExternalNumber": "1111"
                  },
                  "default": {
                    "policyId": "400934",
                    "collectionMethodId": "2",
                    "frequencyId": "6",
                    "bankAccountExternalNumber": "1111"
                  }
                }
              },
              "example": {
                "input": {
                  "policyId": "400934",
                  "collectionMethodId": "2",
                  "frequencyId": "6",
                  "bankAccountExternalNumber": "1111"
                }
              },
              "default": {
                "input": {
                  "policyId": "400934",
                  "collectionMethodId": "2",
                  "frequencyId": "6",
                  "bankAccountExternalNumber": "1111"
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": ""
          }
        },
        "summary": ""
      }
    },
    "/api/v1/calculatePolicyPremium": {
      "post": {
        "tags": [
          "Policy"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "parameter",
            "schema": {
              "type": "object",
              "properties": {
                "licencePlate": {
                  "type": "string"
                },
                "id": {
                  "type": "string"
                },
                "fromDate": {
                  "type": "string"
                },
                "renewDate": {
                  "type": "string"
                },
                "toDate": {
                  "type": "string"
                },
                "paymentFrequency": {
                  "type": "string"
                },
                "paymentMethod": {
                  "type": "string"
                }
              },
              "example": {
                "licencePlate": "AA1111",
                "id": "5000050",
                "fromDate": "2019-01-16T00:00:00",
                "renewDate": "2020-01-16T00:00:00",
                "toDate": "2020-01-15T23:59:59",
                "paymentFrequency": "10019",
                "paymentMethod": "4"
              },
              "default": {
                "licencePlate": "AA1111",
                "id": "5000050",
                "fromDate": "2019-01-16T00:00:00",
                "renewDate": "2020-01-16T00:00:00",
                "toDate": "2020-01-15T23:59:59",
                "paymentFrequency": "10019",
                "paymentMethod": "4"
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "",
            "schema": {
              "type": "object",
              "properties": {
                "doc": {
                  "type": "object",
                  "properties": {
                    "licencePlate": {
                      "type": "string"
                    },
                    "id": {
                      "type": "string"
                    },
                    "fromDate": {
                      "type": "string"
                    },
                    "renewDate": {
                      "type": "string"
                    },
                    "toDate": {
                      "type": "string"
                    },
                    "paymentFrequency": {
                      "type": "string"
                    },
                    "paymentMethod": {
                      "type": "string"
                    },
                    "carMetadata": {
                      "type": "object",
                      "properties": {
                        "licencePlate": {
                          "type": "string"
                        },
                        "manufacture": {
                          "type": "string"
                        },
                        "type": {
                          "type": "string"
                        },
                        "year": {
                          "type": "string"
                        },
                        "series": {
                          "type": "string"
                        },
                        "model": {
                          "type": "string"
                        },
                        "value": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "licencePlate",
                        "manufacture",
                        "type",
                        "year",
                        "series",
                        "model",
                        "value"
                      ]
                    },
                    "result": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "cover": {
                            "type": "string"
                          },
                          "coverId": {
                            "type": "string"
                          },
                          "taxForCollAmount": {
                            "type": "string"
                          },
                          "paymentLoadingForCollAmount": {
                            "type": "string"
                          },
                          "basicPremiumForCollAmount": {
                            "type": "string"
                          },
                          "costForCollAmount": {
                            "type": "string"
                          },
                          "commissionForCollAmount": {
                            "type": "string"
                          },
                          "premium": {
                            "type": "number"
                          },
                          "key": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "cover",
                          "coverId",
                          "taxForCollAmount",
                          "paymentLoadingForCollAmount",
                          "basicPremiumForCollAmount",
                          "costForCollAmount",
                          "commissionForCollAmount",
                          "premium",
                          "key"
                        ]
                      }
                    }
                  },
                  "required": [
                    "licencePlate",
                    "id",
                    "fromDate",
                    "renewDate",
                    "toDate",
                    "paymentFrequency",
                    "paymentMethod",
                    "carMetadata",
                    "result"
                  ]
                },
                "errors": {
                  "type": "array",
                  "items": {}
                }
              },
              "required": [
                "doc",
                "errors"
              ]
            }
          }
        },
        "summary": ""
      }
    }
  }
}