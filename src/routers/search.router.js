import {Router} from 'express';
import * as dotenv from 'dotenv';
import Exa from 'exa-js';

dotenv.config();

const router = Router();

router.get("/",(req,res)=>{
    res.render(
        "home",
        {
            title: "Home",
            style: "style.css"
        }
    );
})

let hardcodedresults =  {
        "autopromptString": "Here is a link to a GitHub repository related to EVM MLIR:",
        "results": [
            {
                "score": 0.20615461468696594,
                "title": "GitHub - NodLabs/mlir-examples: a simple end to end example of taking a ML graph (TF2 / PyTorch) and running it on a device [cpu, gpu]",
                "id": "https://github.com/NodLabs/mlir-examples",
                "url": "https://github.com/NodLabs/mlir-examples",
                "publishedDate": "2023-02-06T11:53:28.585Z",
                "author": "NodLabs",
                "text": "Collection of easy to use MLIR end to end examples.\nA collection of MLIR End to End examples. We plan to add working examples of:\nTF2 Saved Model --&gt; MHLO --&gt; C/C++\n--&gt; C++ --&gt; target of your choice. With EmitC: (https://github.com/iml130/mlir-emitc/tree/cgo)\n--&gt; C++ --&gt; target of your device. With TCIE: (https://gist.github.com/silvasean/8eb20f3649855b64f525c7141033f053)\nTF2 Saved Model --&gt; MHLO --&gt; LLVM_IR\n--&gt; RefE2E (?)\n--&gt; LLVM-IR-e2e in this repo\nTorchscript --&gt; ATen --&gt; [C++ / LLVM_IR]\nUse mlir-npcomp to generate ATen Dialect.\nLower to C++ / LLVM_IR (?)\nIntalling LLVM/MLIR and TF Dependencies:\n git clone https://github.com/NodLabs/mlir-examples.git\nmkdir mlir-examples/\n./install_deps.sh \nExport the pre-built binaries into your path (you can also directly call the binaries)\n  export PATH=`pwd`/build/install/bin:$PATH\n  \nGenerating MHLO-&gt;LLVM-IR-&gt;Target examples\nNow cd into one of the examples and give it a try.\n  ./build/install/bin/tf_to_kernel --input=LLVM-IR-E2E/tf_abs/tf_abs.mlir --output=abs_kernel.o\nfile abs_kernel.o\n  \nGenerating MHLO-&gt;C++-&gt;Target examples\n  mkdir build/emitc\ncd build/emitc\ncmake -G Ninja -DCMAKE_C_COMPILER=clang-10 -DCMAKE_CXX_COMPILER=clang++-10 .. -DCMAKE_PREFIX_PATH=../../build/install/lib/cmake/mlir -DLLVM_EXTERNAL_LIT=`pwd`/../build-mlir/bin/llvm-lit ../../external/mlir-emitc/\ncmake --build . --target check-emitc\n  \nCurrently you will notice three tests failing\n  -- Testing: 13 tests, 13 workers --\nUNRESOLVED: EMITC :: testCorrectGroundTruthWithHMC_canon_inline.mlir (1 of 13)\nUNRESOLVED: EMITC :: testCorrectGroundTruthWithHMC_canon.mlir (2 of 13)\nPASS: EMITC :: Target/cpp-calls-for.mlir (3 of 13)\nUNRESOLVED: EMITC :: testCorrectGroundTruthWithHMC.mlir (4 of 13)\nPASS: EMITC :: Dialect/EmitC/ops.mlir (5 of 13)\nPASS: EMITC :: Target/cpp-calls.mlir (6 of 13)\nPASS: EMITC :: Target/cpp-calls-if.mlir (7 of 13)\nPASS: EMITC :: Conversion/mhlo-to-std.mlir (8 of 13)\nPASS: EMITC :: Conversion/std-to-emitc.mlir (9 of 13)\nPASS: EMITC :: Conversion/mhlo-to-emitc.mlir (10 of 13)\nPASS: EMITC :: Conversion/scf-to-emitc.mlir (11 of 13)\nPASS: EMITC :: Dialect/EmitC/ifop.mlir (12 of 13)\nPASS: EMITC :: Dialect/EmitC/forop.mlir (13 of 13)\n********************\nUnresolved Tests (3):\nEMITC :: testCorrectGroundTruthWithHMC.mlir\nEMITC :: testCorrectGroundTruthWithHMC_canon.mlir\nEMITC :: testCorrectGroundTruthWithHMC_canon_inline.mlir\nTesting Time: 0.12s\nPassed : 10\nUnresolved: 3\nFAILED: test/CMakeFiles/check-emitc\ncd /home/anush/github/mlir-examples/build/emitc/test &amp;&amp; /home/anush/github/mlir-examples/build/emitc/../build-mlir/bin/llvm-lit /home/anush/github/mlir-examples/build/emitc/test\nninja: build stopped: subcommand failed.\n  \nOther references\n https://llvm.discourse.group/t/print-in-mlir/1701/13",
                "highlights": [
                    "Collection of easy to use MLIR end to end examples. A collection of MLIR End to End examples. We plan to add working examples of: --&gt; C++ --&gt; target of your choice. With EmitC: (https://github.com/iml130/mlir-emitc/tree/cgo)"
                ],
                "highlightScores": [
                    0.12270209193229675
                ]
            },
            {
                "score": 0.20583507418632507,
                "title": "GitHub - Miyamura80/tinyAcceleratedEVM: A gymnax based EVM simulator written in the JAX machine learning framework. The idea is to write an EVM simulator that can be parallelized and gain significant performance boosts on the accelerated hardware such GPU/TPU.",
                "id": "https://github.com/Miyamura80/tinyAcceleratedEVM",
                "url": "https://github.com/Miyamura80/tinyAcceleratedEVM",
                "publishedDate": "2023-02-06T15:21:20.309Z",
                "author": "Miyamura",
                "text": "A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?",
                "highlights": [
                    "A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?"
                ],
                "highlightScores": [
                    0.11127301305532455
                ]
            },
            {
                "score": 0.20167960226535797,
                "title": "GitHub - amlatyrngom/SQLIR: SQL Optimizations using MLIR",
                "id": "https://github.com/amlatyrngom/SQLIR",
                "url": "https://github.com/amlatyrngom/SQLIR",
                "publishedDate": "2023-02-06T21:55:55.812Z",
                "author": "Amlatyrngom",
                "text": "The LLVM Compiler Infrastructure\nThis directory and its sub-directories contain source code for LLVM,\na toolkit for the construction of highly optimized compilers,\noptimizers, and run-time environments.\nThe README briefly describes how to get started with building LLVM.\nFor more information on how to contribute to the LLVM project, please\ntake a look at the\nContributing to LLVM guide.\nGetting Started with the LLVM System\nTaken from https://llvm.org/docs/GettingStarted.html.\nOverview\nWelcome to the LLVM project!\nThe LLVM project has multiple components. The core of the project is\nitself called \"LLVM\". This contains all of the tools, libraries, and header\nfiles needed to process intermediate representations and converts it into\nobject files. Tools include an assembler, disassembler, bitcode analyzer, and\nbitcode optimizer. It also contains basic regression tests.\nC-like languages use the Clang front end. This\ncomponent compiles C, C++, Objective C, and Objective C++ code into LLVM bitcode\n-- and from there into object files, using LLVM.\nOther components include:\nthe libc++ C++ standard library,\nthe LLD linker, and more.\nGetting the Source Code and Building LLVM\nThe LLVM Getting Started documentation may be out of date. The Clang\nGetting Started page might have more\naccurate information.\nThis is an example work-flow and configuration to get and build the LLVM source:\nCheckout LLVM (including related sub-projects like Clang):\n git clone https://github.com/llvm/llvm-project.git \nOr, on windows, git clone --config core.autocrlf=false https://github.com/llvm/llvm-project.git \nConfigure and build LLVM and Clang:\n cd llvm-project \n mkdir build \n cd build \n cmake -G &lt;generator&gt; [options] ../llvm \nSome common build system generators are:\n Ninja --- for generating Ninja\nbuild files. Most llvm developers use Ninja.\n Unix Makefiles --- for generating make-compatible parallel makefiles.\n Visual Studio --- for generating Visual Studio projects and\nsolutions.\n Xcode --- for generating Xcode projects.\nSome Common options:\n -DLLVM_ENABLE_PROJECTS='...' --- semicolon-separated list of the LLVM\nsub-projects you'd like to additionally build. Can include any of: clang,\nclang-tools-extra, libcxx, libcxxabi, libunwind, lldb, compiler-rt, lld,\npolly, or debuginfo-tests.\nFor example, to build LLVM, Clang, libcxx, and libcxxabi, use\n-DLLVM_ENABLE_PROJECTS=\"clang;libcxx;libcxxabi\".\n -DCMAKE_INSTALL_PREFIX=directory --- Specify for directory the full\npath name of where you want the LLVM tools and libraries to be installed\n(default /usr/local).\n -DCMAKE_BUILD_TYPE=type --- Valid options for type are Debug,\nRelease, RelWithDebInfo, and MinSizeRel. Default is Debug.\n -DLLVM_ENABLE_ASSERTIONS=On --- Compile with assertion checks enabled\n(default is Yes for Debug builds, No for all other build types).\n cmake --build . [-- [options] &lt;target&gt;] or your build system specified above\ndirectly.\nThe default target (i.e. ninja or make) will build all of LLVM.\nThe check-all target (i.e. ninja check-all) will run the\nregression tests to ensure everything is in working order.\nCMake will generate targets for each tool and library, and most\nLLVM sub-projects generate their own check-&lt;project&gt; target.\nRunning a serial build will be slow. To improve speed, try running a\nparallel build. That's done by default in Ninja; for make, use the option\n-j NNN, where NNN is the number of parallel jobs, e.g. the number of\nCPUs you have.\nFor more information see CMake \nConsult the\nGetting Started with LLVM\npage for detailed information on configuring and compiling LLVM. You can visit\nDirectory Layout\nto learn about the layout of the source code tree.",
                "highlights": [
                    "The README briefly describes how to get started with building LLVM. For more information on how to contribute to the LLVM project, please Taken from https://llvm.org/docs/GettingStarted.html. The LLVM project has multiple components. The core of the project is"
                ],
                "highlightScores": [
                    0.3257465660572052
                ]
            },
            {
                "score": 0.20152217149734497,
                "title": "GitHub - SharwariSamdekar/MLIR_MATMUL",
                "id": "https://github.com/SharwariSamdekar/MLIR_MATMUL",
                "url": "https://github.com/SharwariSamdekar/MLIR_MATMUL",
                "publishedDate": "2023-02-26T10:45:22.642Z",
                "author": "SharwariSamdekar",
                "text": "Name already in use\n \n A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?\n1\nbranch\n0\ntags\nCode\n \nUse Git or checkout with SVN using the web URL.\nOpen with GitHub Desktop\n \nDownload ZIP\n \n \nLatest commit\nFiles\nPermalink\nFailed to load latest commit information.\n  \nType\nName\nLatest commit message\nCommit time\n MLIR_MATMUL\nBuild MLIR from LLVM Project\n git clone https://github.com/llvm/llvm-project.git\nmkdir llvm-project/build\ncd llvm-project/build\ncmake -G Ninja ../llvm -DLLVM_ENABLE_PROJECTS=mlir -DLLVM_BUILD_EXAMPLES=ON -DLLVM_TARGETS_TO_BUILD=\"X86\" -DCMAKE_BUILD_TYPE=Release -DLLVM_ENABLE_ASSERTIONS=ON -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -DLLVM_ENABLE_LLD=ON -DCMAKE_EXPORT_COMPILE_COMMANDS=ON\ncmake --build . --target check-mlir \nYou can optionally build additional targets.\n cmake -G Ninja ../llvm -DLLVM_ENABLE_PROJECTS=mlir -DLLVM_BUILD_EXAMPLES=ON -DLLVM_TARGETS_TO_BUILD=\"X86;NVPTX;AMDGPU\" -DCMAKE_BUILD_TYPE=Release -DLLVM_ENABLE_ASSERTIONS=ON -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -DLLVM_ENABLE_LLD=ON -DCMAKE_EXPORT_COMPILE_COMMANDS=ON",
                "highlights": [
                    "Are you sure you want to create this branch?  git clone https://github.com/llvm/llvm-project.git cmake -G Ninja ../llvm -DLLVM_ENABLE_PROJECTS=mlir -DLLVM_BUILD_EXAMPLES=ON -DLLVM_TARGETS_TO_BUILD=\"X86\" -DCMAKE_BUILD_TYPE=Release -DLLVM_ENABLE_ASSERTIONS=ON -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -DLLVM_ENABLE_LLD=ON -DCMAKE_EXPORT_COMPILE_COMMANDS=ON  cmake -G Ninja ../llvm -DLLVM_ENABLE_PROJECTS=mlir -DLLVM_BUILD_EXAMPLES=ON -DLLVM_TARGETS_TO_BUILD=\"X86;NVPTX;AMDGPU\" -DCMAKE_BUILD_TYPE=Release -DLLVM_ENABLE_ASSERTIONS=ON -DCMAKE_C_COMPILER=clang -DCMAKE_CXX_COMPILER=clang++ -DLLVM_ENABLE_LLD=ON -DCMAKE_EXPORT_COMPILE_COMMANDS=ON"
                ],
                "highlightScores": [
                    0.04208371788263321
                ]
            },
            {
                "score": 0.19863523542881012,
                "title": "GitHub - microsoft/EVM-for-CCF: Sample EVM application for CCF",
                "id": "https://github.com/microsoft/EVM-for-CCF",
                "url": "https://github.com/microsoft/EVM-for-CCF",
                "publishedDate": "2023-02-06T21:14:40.006Z",
                "author": "Microsoft",
                "text": "⚠️\n This repository is based on a very old version of CCF, and is no longer being updated. For up-to-date sample apps for CCF, see the main CCF repo: https://github.com/Microsoft/CCF  \n⚠️\nEVM for CCF\nThis repository contains a sample application for the Confidential Consortium Framework (CCF) running an Ethereum Virtual Machine (EVM). This demonstrates how to build CCF from an external project, while also showcasing CCF's deterministic commits, dynamic confidentiality, and high performance.\nThe app exposes API endpoints based on the Ethereum JSON RPC specification (eg - eth_sendRawTransaction, eth_getTransactionReceipt), so some standard Ethereum tooling can be reused by merely modifying the transport layer to communicate with CCF.\nContents\nFile/folder\nDescription\n src \nSource code for the EVM4CCF app\n tests \nUnit tests for the app's key functionality\n samples \nEnd-to-end tests, driving an EVM4CCF instance with standard web3.py tools\nPrerequisites\nThis sample requires an SGX-enabled VM with CCF's dependencies. Installation of these requirements is described in CCF's documentation.\nSetup\n  git clone --recurse-submodules https://github.com/microsoft/EVM-for-CCF.git\ncd EVM-for-CCF\nmkdir build\ncd build\ncmake .. -GNinja\nninja\n  \nRunning the sample\nTo run the full test suite:\nTo launch a local instance for manual testing:\n  cd build\n./tests.sh -N\nsource env/bin/activate\nexport PYTHONPATH=../CCF/tests\npython ../CCF/tests/start_network.py -g ../CCF/src/runtime_config/gov.lua -p libevm4ccf\n...\nStarted CCF network with the following nodes:\nNode [ 0] = 127.163.125.22:40718\nNode [ 1] = 127.40.220.213:32917\nNode [ 2] = 127.42.144.73:40275\n  \nUser transactions can then be submitted as described in the CCF documentation, or via web3.py with the CCFProvider class defined in samples/provider.py.\nKey concepts\nCCF is a framework for building fault-tolerant, high-performance, fully-confidential distributed services, hosting a user-defined application. In this case the user-defined application is an interpreter for Ethereum bytecode, executing smart contracts entirely inside a TEE.\nThis service looks in many ways like a traditional Ethereum node, but has some fundamental differences:\nConsensus is deterministic rather than probabilistic. Since we trust the executing node, we do not need to re-execute on every node or wait for multiple block commits. There is a single transaction history, with no forks.\nThere are no local nodes. Users do not run their own node, trusting it with key access and potentially private state. Instead all nodes run inside enclaves, maintaining privacy and guaranteeing execution integrity, regardless of where those enclaves are actually hosted.\nState is confidential, and that confidentiality is entirely controlled by smart contract logic. The app does not produce a public log of all transactions, and it does not reveal the resulting state to all users. The only access to state is by calling methods on smart contracts, where arbitrarily complex and dynamic restrictions can be applied.\nContributing\nThis project welcomes contributions and suggestions. Most contributions require you to agree to a\nContributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us\nthe rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.\nWhen you submit a pull request, a CLA bot will automatically determine whether you need to provide\na CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions\nprovided by the bot. You will only need to do this once across all repos using our CLA.\nThis project has adopted the Microsoft Open Source Code of Conduct.\nFor more information see the Code of Conduct FAQ or\ncontact opencode@microsoft.com with any additional questions or comments.",
                "highlights": [
                    "This project welcomes contributions and suggestions. Most contributions require you to agree to a Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com."
                ],
                "highlightScores": [
                    0.3129136264324188
                ]
            },
            {
                "score": 0.19811521470546722,
                "title": "GitHub - JueonPark/MLIR_tutorial: practice for MLIR",
                "id": "https://github.com/JueonPark/MLIR_tutorial",
                "url": "https://github.com/JueonPark/MLIR_tutorial",
                "publishedDate": "2023-02-06T11:29:00.016Z",
                "author": "JueonPark",
                "text": "A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?",
                "highlights": [
                    "A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?"
                ],
                "highlightScores": [
                    0.11127301305532455
                ]
            },
            {
                "score": 0.19794803857803345,
                "title": "GitHub - joker-eph/llvm-project-with-mlir: Clone of the LLVM project with MLIR repo integrated as a top-level subproject",
                "id": "https://github.com/joker-eph/llvm-project-with-mlir",
                "url": "https://github.com/joker-eph/llvm-project-with-mlir",
                "publishedDate": "2023-02-07T12:54:36.889Z",
                "author": "Joker-Eph",
                "text": "The LLVM Compiler Infrastructure\nThis directory and its subdirectories contain source code for LLVM,\na toolkit for the construction of highly optimized compilers,\noptimizers, and runtime environments.\nThe README briefly describes how to get started with building LLVM.\nFor more information on how to contribute to the LLVM project, please\ntake a look at the\nContributing to LLVM guide.\nGetting Started with the LLVM System\nTaken from https://llvm.org/docs/GettingStarted.html.\nOverview\nWelcome to the LLVM project!\nThe LLVM project has multiple components. The core of the project is\nitself called \"LLVM\". This contains all of the tools, libraries, and header\nfiles needed to process intermediate representations and converts it into\nobject files. Tools include an assembler, disassembler, bitcode analyzer, and\nbitcode optimizer. It also contains basic regression tests.\nC-like languages use the Clang front end. This\ncomponent compiles C, C++, Objective C, and Objective C++ code into LLVM bitcode\n-- and from there into object files, using LLVM.\nOther components include:\nthe libc++ C++ standard library,\nthe LLD linker, and more.\nGetting the Source Code and Building LLVM\nThe LLVM Getting Started documentation may be out of date. The Clang\nGetting Started page might have more\naccurate information.\nThis is an example workflow and configuration to get and build the LLVM source:\nCheckout LLVM (including related subprojects like Clang):\n git clone https://github.com/llvm/llvm-project.git \nOr, on windows, git clone --config core.autocrlf=false https://github.com/llvm/llvm-project.git \nConfigure and build LLVM and Clang:\n cd llvm-project \n mkdir build \n cd build \n cmake -G &lt;generator&gt; [options] ../llvm \nSome common generators are:\n Ninja --- for generating Ninja\nbuild files. Most llvm developers use Ninja.\n Unix Makefiles --- for generating make-compatible parallel makefiles.\n Visual Studio --- for generating Visual Studio projects and\nsolutions.\n Xcode --- for generating Xcode projects.\nSome Common options:\n -DLLVM_ENABLE_PROJECTS='...' --- semicolon-separated list of the LLVM\nsubprojects you'd like to additionally build. Can include any of: clang,\nclang-tools-extra, libcxx, libcxxabi, libunwind, lldb, compiler-rt, lld,\npolly, or debuginfo-tests.\nFor example, to build LLVM, Clang, libcxx, and libcxxabi, use\n-DLLVM_ENABLE_PROJECTS=\"clang;libcxx;libcxxabi\".\n -DCMAKE_INSTALL_PREFIX=directory --- Specify for directory the full\npathname of where you want the LLVM tools and libraries to be installed\n(default /usr/local).\n -DCMAKE_BUILD_TYPE=type --- Valid options for type are Debug,\nRelease, RelWithDebInfo, and MinSizeRel. Default is Debug.\n -DLLVM_ENABLE_ASSERTIONS=On --- Compile with assertion checks enabled\n(default is Yes for Debug builds, No for all other build types).\nRun your build tool of choice!\nThe default target (i.e. ninja or make) will build all of LLVM.\nThe check-all target (i.e. ninja check-all) will run the\nregression tests to ensure everything is in working order.\nCMake will generate build targets for each tool and library, and most\nLLVM sub-projects generate their own check-&lt;project&gt; target.\nRunning a serial build will be slow. To improve speed, try running a\nparallel build. That's done by default in Ninja; for make, use\nmake -j NNN (NNN is the number of parallel jobs, use e.g. number of\nCPUs you have.)\nFor more information see CMake \nConsult the\nGetting Started with LLVM\npage for detailed information on configuring and compiling LLVM. You can visit\nDirectory Layout\nto learn about the layout of the source code tree.",
                "highlights": [
                    "The README briefly describes how to get started with building LLVM. For more information on how to contribute to the LLVM project, please Taken from https://llvm.org/docs/GettingStarted.html. The LLVM project has multiple components. The core of the project is"
                ],
                "highlightScores": [
                    0.3257465660572052
                ]
            },
            {
                "score": 0.1975589096546173,
                "title": "GitHub - WangX0111/op_fusion: MLIR 算子融合实践",
                "id": "https://github.com/WangX0111/op_fusion",
                "url": "https://github.com/WangX0111/op_fusion",
                "publishedDate": "2023-02-06T13:14:21.566Z",
                "author": "WangX",
                "text": "A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?",
                "highlights": [
                    "A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?"
                ],
                "highlightScores": [
                    0.11127301305532455
                ]
            },
            {
                "score": 0.19613778591156006,
                "title": "GitHub - dan-garvey/sample-torch-mlir",
                "id": "https://github.com/dan-garvey/sample-torch-mlir",
                "url": "https://github.com/dan-garvey/sample-torch-mlir",
                "publishedDate": "2023-02-06T20:48:09.303Z",
                "author": "Dan-Garvey",
                "text": "A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?",
                "highlights": [
                    "A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?"
                ],
                "highlightScores": [
                    0.11127302050590515
                ]
            },
            {
                "score": 0.1952049732208252,
                "title": "GitHub - BrianPHChen/web3ToEVMLite",
                "id": "https://github.com/BrianPHChen/web3ToEVMLite",
                "url": "https://github.com/BrianPHChen/web3ToEVMLite",
                "publishedDate": "2023-02-06T19:38:44.065Z",
                "author": "BrianPHChen",
                "text": "web3 to evmlite dockerize\nDockerize provider\n[Notice] Please run evm_tendermint_node first.\nBuild image\n $ docker build -t web3_to_evmlite . \nRun container\n $ docker run -tid --name provider -p 8545:8545 --link node web3_to_evmlite \nCheck the provider backend status\nattach the container\n$ docker exec -ti provider bash \ncheck the logs (in container)\nroot@&lt;container&gt;:# tail -f logs/provider.log \nHow to use api with javascript\ncheck the test.js as the web3.js template",
                "highlights": [
                    " $ docker run -tid --name provider -p 8545:8545 --link node web3_to_evmlite  root@&lt;container&gt;:# tail -f logs/provider.log "
                ],
                "highlightScores": [
                    0.10198353976011276
                ]
            }
        ],
        "requestId": "292a3b17c4d767f0586ca16b3b84ad4e"
    }

router.post("/search",async (req,res)=>{
    try{
        if (process.env.ENVIROMENT == "development"){
            hardcodedresults.style = "style.css";
            hardcodedresults.title = "Query results";
            return res.render(
                "results",
                hardcodedresults,
            )
        }else{
            const {query} = req.body;
            const apiKey = process.env.API_KEY;
            const exa = new Exa(apiKey);
            const result = await exa.searchAndContents(
                query,
                {
                    text: true,
                    highlights: true,
                    useAutoprompt: true,
                    category: "github",
                    numResults: 10,
                }
            )
            result.style = "style.css";
            result.title = "Query results";
            return res.render(
                "results",
                result,
            )
        }
    }catch(error){
        res.status(400).send({error: error.message});
    }
})

export default router;