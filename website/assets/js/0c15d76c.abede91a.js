"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4643],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9024:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],s={id:"expansion",title:"Validation of Workload Resources"},l=void 0,p={unversionedId:"expansion",id:"version-v3.10.x/expansion",title:"Validation of Workload Resources",description:"Feature State: Gatekeeper version v3.10+ (alpha)",source:"@site/versioned_docs/version-v3.10.x/expansion.md",sourceDirName:".",slug:"/expansion",permalink:"/gatekeeper/website/docs/v3.10.x/expansion",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.10.x/expansion.md",tags:[],version:"v3.10.x",frontMatter:{id:"expansion",title:"Validation of Workload Resources"},sidebar:"docs",previous:{title:"External Data",permalink:"/gatekeeper/website/docs/v3.10.x/externaldata"},next:{title:"The gator CLI",permalink:"/gatekeeper/website/docs/v3.10.x/gator"}},c={},d=[{value:"Configuring Expansion",id:"configuring-expansion",level:2},{value:"ExpansionTemplate",id:"expansiontemplate",level:4},{value:"Match Source",id:"match-source",level:4},{value:"Example",id:"example",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Feature State:")," Gatekeeper version v3.10+ (alpha)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2757This feature is in ",(0,r.kt)("em",{parentName:"p"},"alpha")," stage, and is not enabled by default. To\nenable, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"enable-generator-resource-expansion")," flag.")),(0,r.kt)("p",null,'A workload resource is a resource that creates other resources, such as a\nDeployment or Job. Gatekeeper can be configured to reject workload resources\nthat might create a resource that violates a constraint. For example, one could\nconfigure Gatekeeper to immediately reject deployments that would create a Pod\nthat violates a constraint instead of merely rejecting the Pods. To achieve\nthis, Gatekeeper creates a "mock resource" for the Pod, runs validation on it,\nand aggregates the mock resource\'s violations onto the parent resource (the\nDeployment in this example).'),(0,r.kt)("p",null,'To use this functionality, first specify which resources should be "expanded"\ninto mock resource(s) by creating an ',(0,r.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate")," custom resource. This\nspecifies the GVKs of the workload resources, the GVK of the resultant mock\nresource, as well as which subfield of the workload resource should be used to\nexpand the mock resource (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template")," for most Pod-generating\nresources)."),(0,r.kt)("p",null,"In some cases, it may not be possible to build an accurate representation of a\nmock resource by looking at the workload resource alone. For example, suppose a\ncluster is using Istio, which will inject a sidecar container on specific\nresources. This sidecar configuration is not specified in the config of the\nworkload resource (i.e. Deployment), but rather injected by Istio's webhook. In\norder to accurately represent mock resources modified by controllers or\nwebhooks, Gatekeeper leverages its\n",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.10.x/mutation"},"Mutations"),"\nfeature to allow mock resources to be manipulated into their desired form. In\nthe Istio example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Assign")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ModifySet")," mutators could be configured to\nmimic Istio sidecar injection. For further details on mutating mock resources\nsee the ",(0,r.kt)("a",{parentName:"p",href:"#match-source"},"Math Source")," section below, or to see a working example,\nsee the ",(0,r.kt)("a",{parentName:"p",href:"#example"},"Example")," section."),(0,r.kt)("p",null,"Any resources configured for expansion will be expanded by both the validating\nwebhook and\n",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.10.x/audit"},"Audit"),". This\nfeature will only be enabled if a user creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate")," that\ntargets some resource that exists on the cluster."),(0,r.kt)("p",null,"Note that the accuracy of enforcement depends on how well the mock resource\nresembles the real thing. Mutations can help with this, but 100% accuracy is\nimpossible because not all fields can be predicted. For instance, deployments\ncreate pods with random names. Inaccurate mocks may lead to over or under\nenforcement. In the case of under enforcement, the resultant pod should still be\nrejected. Finally, non-state-based policies (those that rely on transient\nmetadata such as requesting user or time of creation) cannot be enforced\naccurately. This is because such metadata would necessarily be different when\ncreating the resultant resource. For example, a deployment is created using the\nrequesting user's account, but the pod creation request comes from the service\naccount of the deployment controller."),(0,r.kt)("p",null,"If, for any reason, you want to exempt expanded resources from a specific\nconstraint, look at the ",(0,r.kt)("a",{parentName:"p",href:"#match-source"},"Match Source")," section below."),(0,r.kt)("h2",{id:"configuring-expansion"},"Configuring Expansion"),(0,r.kt)("p",null,"Expansion behavior is configured through the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate")," custom\nresource. Optionally, users can create ",(0,r.kt)("inlineCode",{parentName:"p"},"Mutation")," custom resources to customize\nhow resources are expanded. Mutators with the ",(0,r.kt)("inlineCode",{parentName:"p"},"source: Generated")," field will\nonly be applied when expanding workload resources, and will not mutate real\nresources on the cluster. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," field is not set, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mutation")," will\napply to both expanded resources and real resources on the cluster."),(0,r.kt)("p",null,"Users can test their expansion configuration using the\n",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.10.x/gator"},(0,r.kt)("inlineCode",{parentName:"a"},"gator expand")," CLI"),"\n."),(0,r.kt)("h4",{id:"expansiontemplate"},"ExpansionTemplate"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate")," custom resource specifies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Which resource(s) should be expanded, specified by their GVK"),(0,r.kt)("li",{parentName:"ul"},"The GVK of the resultant resource"),(0,r.kt)("li",{parentName:"ul"},'Which field to use as the "source" for the resultant resource. The template\nsource is a field on the parent resource which will be used as the base for\nexpanding it before any mutators are applied. For example, in a case where a\n',(0,r.kt)("inlineCode",{parentName:"li"},"Deployment")," expands into a ",(0,r.kt)("inlineCode",{parentName:"li"},"Pod"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.template")," would typically be the\nsource."),(0,r.kt)("li",{parentName:"ul"},"Optionally, an enforcement action override can be used when validating resultant\nresources. If this field is set, any violations against the resultant resource\nwill use this enforcement action. If an enforcement action is not specified by\nthe ",(0,r.kt)("inlineCode",{parentName:"li"},"ExpansionTemplate"),", the enforcement action set by the Constraint in\nviolation will be used.")),(0,r.kt)("p",null,"Here is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate")," that specifies that ",(0,r.kt)("inlineCode",{parentName:"p"},"DaemonSet"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"Deployment"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Job"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicaSet"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicationController"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"StatefulSet"),"\nshould be expanded into a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: expansion.gatekeeper.sh/v1alpha1\nkind: ExpansionTemplate\nmetadata:\n  name: expand-deployments\nspec:\n  applyTo:\n    - groups: ["apps"]\n      kinds: ["DaemonSet", "Deployment", "ReplicaSet", "StatefulSet"]\n      versions: ["v1"]\n    - groups: [""]\n      kinds: ["ReplicationController"]\n      versions: ["v1"]\n    - groups: ["batch"]\n      kinds: ["Job"]\n      versions: ["v1"]\n  templateSource: "spec.template"\n  enforcementAction: "warn"\n  generatedGVK:\n    kind: "Pod"\n    group: ""\n    version: "v1"\n')),(0,r.kt)("p",null,"With this ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpansionTemplate"),", any constraints that are configured to target\n",(0,r.kt)("inlineCode",{parentName:"p"},"Pods"),' will be evaluated on the "mock Pods" when a ',(0,r.kt)("inlineCode",{parentName:"p"},"Deployment")," /",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicaSet")," is\nbeing reviewed. Any violations created against the mock Pod will have their\nenforcement action set to ",(0,r.kt)("inlineCode",{parentName:"p"},"warn"),", regardless of the enforcement actions\nspecified by the Constraint in violation."),(0,r.kt)("h4",{id:"match-source"},"Match Source"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," field on the ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," API, present in the Mutation\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"ConstraintTemplate")," kinds, specifies if the config should match Generated (\ni.e. expanded) resources, Original resources, or both. The ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," field is\nan ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," which accepts the following values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Generated")," \u2013 the config will only apply to expanded resources, ",(0,r.kt)("strong",{parentName:"li"},"and will not\napply to any real resources on the cluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Original")," \u2013 the config will only apply to Original resources, and will not\naffect expanded resources"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"All")," \u2013 the config will apply to both ",(0,r.kt)("inlineCode",{parentName:"li"},"Generated")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Original")," resources.\nThis is the default value.")),(0,r.kt)("p",null,"For example, suppose a cluster's ",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicaSet")," controller adds a default value\nfor ",(0,r.kt)("inlineCode",{parentName:"p"},"fooField")," when creating Pods that cannot reasonably be added to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ReplicaSet"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.template"),". If a constraint relies on these default values,\na user could create a Mutation custom resource that modifies expanded resources,\nlike so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1alpha1\nkind: Assign\nmetadata:\n  name: assign-foo-field\nspec:\n  applyTo:\n  - groups: [""]\n    kinds: ["Pod"]\n    versions: ["v1"]\n  location: "spec.containers[name: *].fooField"\n  parameters:\n    assign:\n      value: "Bar"\n  match:\n    source: "Generated"\n    scope: Cluster\n    kinds:\n      - apiGroups: []\n        kinds: []\n')),(0,r.kt)("p",null,"Similarly, ",(0,r.kt)("inlineCode",{parentName:"p"},"Constraints")," can be configured to only target expanded resources by\nsetting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Constraint"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.match.source")," field to ",(0,r.kt)("inlineCode",{parentName:"p"},"Generated"),". This can\nalso be used to define different enforcement actions for expanded resources and\noriginal resources."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Suppose a cluster is using Istio, and has some policy configured to ensure\nspecified Pods have an Istio sidecar. To validate Deployments that would create\nPods which Istio will inject a sidecar into, we need to use mutators to mimic\nthe sidecar injection."),(0,r.kt)("p",null,"What follows is an example of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an  ",(0,r.kt)("inlineCode",{parentName:"li"},"ExpansionTemplate")," configured to expand ",(0,r.kt)("inlineCode",{parentName:"li"},"Deployments")," into ",(0,r.kt)("inlineCode",{parentName:"li"},"Pods")),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("inlineCode",{parentName:"li"},"Assign")," mutator to add the Istio sidecar container to ",(0,r.kt)("inlineCode",{parentName:"li"},"Pods")),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"ModifySet")," mutator to add the ",(0,r.kt)("inlineCode",{parentName:"li"},"proxy")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"sidecar")," args"),(0,r.kt)("li",{parentName:"ul"},"an inbound ",(0,r.kt)("inlineCode",{parentName:"li"},"Deployment"),", and the resulting ",(0,r.kt)("inlineCode",{parentName:"li"},"Pod"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note that the Mutators set the ",(0,r.kt)("inlineCode",{parentName:"strong"},"source: Generated")," field, which will cause\nthem to only be applied when expanding resources specified\nby ",(0,r.kt)("inlineCode",{parentName:"strong"},"ExpansionTemplates"),". These Mutators will not affect any real resources on\nthe cluster.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: expansion.gatekeeper.sh/v1alpha1\nkind: ExpansionTemplate\nmetadata:\n  name: expand-deployments\nspec:\n  applyTo:\n    - groups: ["apps"]\n      kinds: ["Deployment"]\n      versions: ["v1"]\n  templateSource: "spec.template"\n  generatedGVK:\n    kind: "Pod"\n    group: ""\n    version: "v1"\n---\napiVersion: mutations.gatekeeper.sh/v1beta1\nkind: Assign\nmetadata:\n  name: add-sidecar\nspec:\n  applyTo:\n    - groups: [""]\n      kinds: ["Pod"]\n      versions: ["v1"]\n  match:\n    scope: Namespaced\n    source: All\n    kinds:\n      - apiGroups: ["*"]\n        kinds: ["Pod"]\n  location: "spec.containers[name:istio-proxy]"\n  parameters:\n    assign:\n      value:\n        name: "istio-proxy"\n        imagePullPolicy: IfNotPresent\n        image: docker.io/istio/proxyv2:1.15.0\n        ports:\n          - containerPort: 15090\n            name: http-envoy-prom\n            protocol: TCP\n        securityContext:\n          allowPrivilegeEscalation: false\n          capabilities:\n            drop:\n              - ALL\n---\napiVersion: mutations.gatekeeper.sh/v1beta1\nkind: ModifySet\nmetadata:\n  name: add-istio-args\nspec:\n  applyTo:\n    - groups: [""]\n      kinds: ["Pod"]\n      versions: ["v1"]\n  match:\n    source: All\n  location: "spec.containers[name:istio-proxy].args"\n  parameters:\n    operation: merge\n    values:\n      fromList:\n        - proxy\n        - sidecar\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  labels:\n    app: nginx\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:1.14.2\n          ports:\n            - containerPort: 80\n          args:\n            - "/bin/sh"\n')),(0,r.kt)("p",null,"When expanded, the above configs will produce the following ",(0,r.kt)("inlineCode",{parentName:"p"},"Pod"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    app: nginx\nspec:\n  containers:\n  - args:\n    - /bin/sh\n    image: nginx:1.14.2\n    name: nginx\n    ports:\n    - containerPort: 80\n  - args:\n    - proxy\n    - sidecar\n    image: docker.io/istio/proxyv2:1.15.0\n    imagePullPolicy: IfNotPresent\n    name: istio-proxy\n    ports:\n    - containerPort: 15090\n      name: http-envoy-prom\n      protocol: TCP\n    securityContext:\n      allowPrivilegeEscalation: false\n      capabilities:\n        drop:\n        - ALL\n")))}m.isMDXComponent=!0}}]);