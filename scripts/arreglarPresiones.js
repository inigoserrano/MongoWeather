db.weather.update({ Absolute_Pressure: "---" },
                  { $set: {Absolute_Pressure: 0} },
                  {multi: true});
db.weather.update({ Relative_Pressure: "---" },
                  { $set: {Relative_Pressure: 0} },
                  {multi: true});
