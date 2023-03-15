"use client";
import { ListUnorderedIcon } from "@primer/octicons-react";
import { BaseStyles, ThemeProvider, Box, Text, SegmentedControl, IconButton } from "@primer/react";
import { useState } from "react";

export default function Home() {
	const [selectedButton, setSelectedButton] = useState<"preview" | "code" | "blame">("preview");

	const handleChange = (i: number) => {
		switch (i) {
			case 1:
				setSelectedButton("code");
				break;
			case 2:
				setSelectedButton("blame");
				break;
			case 0:
			default:
				setSelectedButton("preview");
		}
		return;
	};
	return (
		<>
			<ThemeProvider colorMode="night">
				<BaseStyles>
					<Box
						sx={{
							width: "100vw",
							height: "100vh",
							backgroundColor: "canvas.default",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							padding: 4,
						}}
					>
						<Box
							sx={{
								border: "1px solid",
								borderColor: "border.default",
								borderRadius: 2,
								width: "100%",
								minHeight: "medium",
							}}
						>
							<CodeHeaderBar selected={selectedButton} onChange={handleChange} />

							{selectedButton == "preview" ? (
								<Box sx={{ padding: 4, maxWidth: "small" }}>
									The design team works closely in collaboration with the EPD squad in order to produce a deliverable to be
									implemented. This deliverable can vary depending on the teams: it can be a design spec document or a set of
									figma screens, for example. We are usually one quarter ahead of the engineering teams to give enough room for
									discovery and exploration, before we start implementing the feature. While we&apos;re brainstorming, it is
									helpful to provide feedback about technical limitations or considerations we need to keep in mind while
									developing the solution. This reduces the back and forth between the EPD team during the implementation phase
									and ensures everyone is on the same page. is the preview!
								</Box>
							) : null}

							{selectedButton == "code" ? <Box sx={{ padding: 4, maxWidth: "small" }}>This is the code!</Box> : null}

							{selectedButton == "blame" ? <Box sx={{ padding: 4, maxWidth: "small" }}>This is the blame!</Box> : null}
						</Box>
					</Box>
				</BaseStyles>
			</ThemeProvider>
		</>
	);
}

const CodeHeaderBar = (props: { onChange: (i: number) => void; selected: "preview" | "code" | "blame" }) => {
	const { selected, onChange } = props;
	const handleChange = (i: number) => {
		onChange(i);
	};
	return (
		<Box
			sx={{
				backgroundColor: "canvas.subtle",
				borderBottom: "1px solid",
				borderColor: "border.default",
				padding: 2,
				display: "flex",
				alignItems: "center",
				gap: 3,
			}}
		>
			<SegmentedControl
				aria-label="Code view"
				onChange={(i) => {
					handleChange(i);
				}}
			>
				<SegmentedControl.Button selected={selected == "preview"}>Preview</SegmentedControl.Button>
				<SegmentedControl.Button selected={selected == "code"}>Code</SegmentedControl.Button>
				<SegmentedControl.Button selected={selected == "blame"}>Blame</SegmentedControl.Button>
			</SegmentedControl>
			<Text
				sx={{
					fontFamily: "mono",
					color: "fg.subtle",
					fontSize: 1,
					flexGrow: "1",
				}}
			>
				94 lines (57 loc) · 6.6 KB
			</Text>
			<IconButton aria-label="List" icon={ListUnorderedIcon} variant="invisible" />
		</Box>
	);
};
