<template>
  <div>
    <AnimatedSlide canToggle year="2018" isBottom>
      <template #header>
        <iframe
          src="https://www.youtube.com/embed/4phJmMGCcCc?si=wjv8hHp28j9KFQCa&amp;controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          class="aspect"
          allowfullscreen
        ></iframe>
      </template>
      <template #content>
        <div class="text-left p-3">
          <h2>
            Spatial Evaluation of Convolutional Neural Networks using UAVs
          </h2>
          <p className="article-text">
            Convolutional Neural Networks suffer from a lack of explaination
            when it comes to their use. The current standard for depicting a
            convolutional neural network's capability has a dependency on the
            dataset that was used to train and test it. For example, this
            convolutional neural network has a 92% accuracy using some dataset.
            In order for you to comprehend the convolutional neural networks
            capabilities you have to be an expert on the dataset used. Even if
            you are an expert, it still does not define how well the
            convolutional neural network will preform in a 3 dimensional
            environment. For example, questions such as at what distance does
            the network start to lose accuracy, what are the weak view points
            such as the front or back of the object, and how well does the
            network preform when both the viewpoint and distance are dynamic.
          </p>
          <p className="article-text">
            This projects presents another approach to depicting the behaviour
            of a convolutional neural network. I am not stating that the
            previous approach is worse, it is the appropriate approach for
            debugging and training a network. The change in accuracy for a
            datasets depicts how your network topology changes are impacting the
            accuracy of the network. However, once the network is fully trained
            and the parameters are tuned there must be a better way to help
            developers understand the limitations of the network.
            <img src="/spatial_visual.png" />
            This project uses unmanned aerial vehicles to circle the object
            logging the images and spatial data relative to the object. The
            result is a detailed visual analysis of the spatial limitations of
            the neural network. By providing the spatial limitations engineers
            who are looking to use the network will have a better understanding
            of how the network will perform making it easier for the engineers
            to make decisions. Take Tesla for example, they have two sets of
            convolutional neural network models, one network for objects that
            are closer and another for further away objects, this is a perfect
            example of where understanding the spatial limitations is a
            neccessity.
          </p>
          <p>
            The above image depicts a single distance from the object of 25
            meters, for a more detailed analysis it is crucial to have more than
            a single pass around the object. Below is an image that depicts a
            composite of multiple fly bys with a distance of 10, 15, 20, and 25m
            from the object. The angle of incidence is represented, where the 0
            degree is true north. The object's front should face true north to
            better calculate the angle of incidence relative to the object's
            rotation, for objects that are symmetrical this is not mandatory.
            <img src="/visualmodel.PNG" />
          </p>
          <p>
            In conclusion this work is an approach to help engineers be informed
            about the spatial limitations of convolutional neural networks. The
            project uses data visualization to help aid in the understanding of
            the limitations, and uses an unmanned aerial vehicle to gather the
            spatial data.
          </p>
        </div>
      </template>
    </AnimatedSlide>
  </div>
</template>

<script lang="ts" setup>
import AnimatedSlide from "@/components/AnimatedSlide.vue";
</script>

<style scoped>
.aspect {
  aspect-ratio: 16 / 9;
}
</style>
