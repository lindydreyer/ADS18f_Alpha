exports.getResultset = function(){ 
    return {
      took : 4,
      timed_out : false,
      _shards : {
        total : 1,
        successful : 1,
        failed : 0
      },
      hits : {
        total : 274,
        max_score : 0.0,
        hits : [ ]
      },
      aggregations : {
        autocomplete : {
          doc_count_error_upper_bound : 0,
          sum_other_doc_count : 69,
          buckets : [ {
            key : "Oxybenzone",
            doc_count : 1
          }, {
            key : "Oxybenzone, Avobenzone, Octocrylene",
            doc_count : 1
          }, {
            key : "Oxybenzone, Octinoxate",
            doc_count : 1
          }, {
            key : "Oxybenzone, Octinoxate, Octisalate, And Homosalate",
            doc_count : 1
          }, {
            key : "Oxybenzone, Octinoxate, Octisalate, Homosalate, And Avobenzone",
            doc_count : 1
          } ]
        }
      }
    }
}