class DescriptiveStatistics {
    // Measures of central tendency
    static mean(data) {
      return data.reduce((sum, value) => sum + value, 0) / data.length;
    }
  
    static median(data) {
      const sortedData = [...data].sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[mid - 1] + sortedData[mid]) / 2;
      } else {
        return sortedData[mid];
      }
    }
  
    static mode(data) {
      const frequencyMap = new Map();
      data.forEach(value => {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      });
  
      let mode = [];
      let maxFrequency = 0;
  
      frequencyMap.forEach((frequency, value) => {
        if (frequency > maxFrequency) {
          mode = [value];
          maxFrequency = frequency;
        } else if (frequency === maxFrequency) {
          mode.push(value);
        }
      });
  
      return mode;
    }
  
    // Measures of dispersion
    static range(data) {
      const sortedData = [...data].sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    static variance(data) {
      const meanValue = DescriptiveStatistics.mean(data);
      const squaredDifferences = data.map(value => Math.pow(value - meanValue, 2));
      return DescriptiveStatistics.mean(squaredDifferences);
    }
  
    static standardDeviation(data) {
      return Math.sqrt(DescriptiveStatistics.variance(data));
    }
  
    static quartiles(data) {
      const sortedData = [...data].sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
  
      const lowerQuartile = DescriptiveStatistics.median(sortedData.slice(0, mid));
      const upperQuartile = DescriptiveStatistics.median(sortedData.slice(mid));
  
      return {
        lowerQuartile,
        upperQuartile,
        median: DescriptiveStatistics.median(sortedData),
      };
    }
  
    static interquartileRange(data) {
      const { lowerQuartile, upperQuartile } = DescriptiveStatistics.quartiles(data);
      return upperQuartile - lowerQuartile;
    }
  }
  
  // Example usage
  const data = [2, 4, 4, 4, 5, 5, 7, 9];
  
  console.log('Mean:', DescriptiveStatistics.mean(data));
  console.log('Median:', DescriptiveStatistics.median(data));
  console.log('Mode:', DescriptiveStatistics.mode(data));
  console.log('Range:', DescriptiveStatistics.range(data));
  console.log('Variance:', DescriptiveStatistics.variance(data));
  console.log('Standard Deviation:', DescriptiveStatistics.standardDeviation(data));
  console.log('Quartiles:', DescriptiveStatistics.quartiles(data));
  console.log('Interquartile Range:', DescriptiveStatistics.interquartileRange(data));
  