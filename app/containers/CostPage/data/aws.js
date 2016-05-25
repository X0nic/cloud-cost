const aws_prices = [
   {
    "sku" : "UNB4R4KS4XXHQFD2",
    "productFamily" : "Compute Instance",
    "attributes" : {
      "servicecode" : "AmazonEC2",
      "location" : "US West (Oregon)",
      "locationType" : "AWS Region",
      "instanceType" : "c4.8xlarge",
      "currentGeneration" : "Yes",
      "instanceFamily" : "Compute optimized",
      "vcpu" : "36",
      "physicalProcessor" : "Intel Xeon E5-2666 v3 (Haswell)",
      "clockSpeed" : "2.9 GHz",
      "memory" : "60 GiB",
      "storage" : "EBS only",
      "networkPerformance" : "10 Gigabit",
      "processorArchitecture" : "64-bit",
      "tenancy" : "Shared",
      "operatingSystem" : "Linux",
      "licenseModel" : "No License required",
      "usagetype" : "USW2-BoxUsage:c4.8xlarge",
      "operation" : "RunInstances",
      "dedicatedEbsThroughput" : "4000 Mbps",
      "enhancedNetworkingSupported" : "Yes",
      "preInstalledSw" : "NA",
      "processorFeatures" : "Intel AVX; Intel AVX2; Intel Turbo"
    }
  },
  {
    "sku" : "Q2VGNGRJSQ89RDB7",
    "productFamily" : "Compute Instance",
    "attributes" : {
      "servicecode" : "AmazonEC2",
      "location" : "US West (Oregon)",
      "locationType" : "AWS Region",
      "instanceType" : "m3.xlarge",
      "currentGeneration" : "Yes",
      "instanceFamily" : "General purpose",
      "vcpu" : "4",
      "physicalProcessor" : "Intel Xeon E5-2670 v2 (Ivy Bridge/Sandy Bridge)",
      "clockSpeed" : "2.5 GHz",
      "memory" : "15 GiB",
      "storage" : "2 x 40 SSD",
      "networkPerformance" : "High",
      "processorArchitecture" : "64-bit",
      "tenancy" : "Shared",
      "ebsOptimized" : "Yes",
      "operatingSystem" : "NA",
      "licenseModel" : "NA",
      "usagetype" : "USW2-EBSOptimized:m3.xlarge",
      "operation" : "Hourly",
      "preInstalledSw" : "NA",
      "processorFeatures" : "Intel AVX; Intel Turbo"
    }
  }
]

export default aws_prices;
